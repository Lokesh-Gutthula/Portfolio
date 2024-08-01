import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/js/bootstrap.bundle.min';   // for toggler
import 'bootstrap/dist/css/bootstrap.min.css';   // bootstrap

{/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"> */}

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
