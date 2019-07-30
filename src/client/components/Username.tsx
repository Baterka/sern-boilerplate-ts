import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from "../store";
import { fetchRequest } from "../store/user/actions";

interface PropsFromState {
    loading: boolean
    username: string | null
}

interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch;

class Username extends React.Component<AllProps> {

    componentDidMount() {
        this.props.fetchRequest()
    }

    render() {
        const {username} = this.props;
        return (
            <h1>
                {username ? `Hello ${username}!` : `Loading...`}
            </h1>
        )
    }
}

const mapStateToProps = ({user}: ApplicationState) => ({
    loading: user.loading,
    username: user.username
});

const mapDispatchToProps = {
    fetchRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Username)
