
import React from "react";
import App from "./app";
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import PageLayout from './component/PageLayout'
import './index.css'

const root = createRoot(document.getElementById('root'))
// root.render(<App/>)
root.render(<PageLayout />)

// ReactDOM.render(<App/>, document.getElementById('root'))