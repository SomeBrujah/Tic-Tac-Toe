import './style/style.scss';

import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App className={'SomeClass'} />
        </Provider>
    </React.StrictMode>
);