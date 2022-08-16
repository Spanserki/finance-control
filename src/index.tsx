import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api'; //chamadas que eu quero enviar para o mirage

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transactions 1',
          amount: 400,
          type: 'deposito',
          categoria: 'food',
          createAt: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

