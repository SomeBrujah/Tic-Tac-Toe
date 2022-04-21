import './style/style.scss';
import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
const container = document.getElementById('root');
const root = createRoot(container);
import App from './components/App/App';

root.render(
    <React.StrictMode>
        <App className={'SomeClass'} />
    </React.StrictMode>
);