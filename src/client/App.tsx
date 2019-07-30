import * as React from 'react'
import { Store } from 'redux'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { History } from 'history'
import { ApplicationState } from './store'

import './app.scss';

import ReactImage from './assets/react.png';

import Username from './components/Username';

interface MainProps {
    history: History
}

const App: React.FC<MainProps> = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Username/>
                <img src={ReactImage} alt="react"/>
            </div>
        </ConnectedRouter>
    );
};

export default App;
