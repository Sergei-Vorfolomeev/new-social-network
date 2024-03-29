import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {store} from "app/store";
import {Provider} from "react-redux";
import {StateType} from "app/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: StateType) => {
    root.render(
        <Provider store={store}>
            <HashRouter>
                    <App/>
            </HashRouter>
        </Provider>
    );
}

rerenderEntireTree(store.getState())
store.subscribe( () => {
    rerenderEntireTree(store.getState())
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
