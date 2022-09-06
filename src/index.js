import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./app/features/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>

);


