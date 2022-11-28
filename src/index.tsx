import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: StateType) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={store.addPost.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
