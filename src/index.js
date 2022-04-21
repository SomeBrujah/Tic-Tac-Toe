import './style/style.scss';

import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/rootReducer';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(rootReducer);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App className={'SomeClass'} />
        </Provider>
    </React.StrictMode>
);