import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import  App  from './app.js'; // IMPORTANTE QUE EL App.js tenga esta url
import store from './reducer/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('app')).render(
<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>

);

