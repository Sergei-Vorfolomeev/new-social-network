import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store-redux";
import {Provider} from "react-redux";
import {StateType} from "./redux/store-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: StateType) => {
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <React.StrictMode>
                    <App
                        // state={state} dispatch={store.dispatch.bind(store)}
                    />
                </React.StrictMode>
            </BrowserRouter>
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
