import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history'

import App from './App'
import configureStore from './configureStore'
import { ApplicationState } from "./store";


const history = createBrowserHistory();

//const initialState = window.initialReduxState;
const initialState: ApplicationState = {
    user: {
        username: null,
        loading: false
    }
};

const store = configureStore(history, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);
