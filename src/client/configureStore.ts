import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ApplicationState, createRootReducer, rootSaga } from './store'
import { History } from 'history'


export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(rootSaga);
    return store
}
