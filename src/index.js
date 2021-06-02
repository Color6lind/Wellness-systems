import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

$(document).ready(function() {
    $("a.scrollTo").click(function() {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 700);
        return false;
    })
})

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

