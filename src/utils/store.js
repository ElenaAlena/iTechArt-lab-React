import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from 'config/reducers';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,

    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
        // other store enhancers if any
      ),

    /*applyMiddleware(
        thunkMiddleware,
        //loggerMiddleware
    )*/
);
export default store;