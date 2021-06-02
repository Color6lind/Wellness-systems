import React from 'react'
import LeftScrollbar from "../components/LeftScrollbar"

import bg from "../assets/img/header.jpg"
import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'

const links = {
    up: "#section-header",
    down: "#section-about"
}

$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .navigation__ul').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.navigation__ul>li>a').click(function () {
        $('.header__burger, .navigation__ul').toggleClass('active')
        $('body').toggleClass('lock')
    })
})

function SectionHeader() {
    return (
        <div id="section-header">

            <div className="container">
                <div className="scrollbar-wrapper" style={{width: "0"}}>
                    <LeftScrollbar text="01" up={links.up} down={links.down}/>

                    <div className="title">
                        <p className="title__text">WELLNESS SYSTEMS</p>
                    </div>
                </div>
            </div>

            <div className="navigation-wrapper">
                <img src={bg} alt="" className="img__bg"/>
                <div className="burger--wrapper">
                    <div className="header__burger">
                        <span></span>
                    </div>
                </div>

                <nav className="navigation">
                    <ul className="navigation__ul">
                        <li>
                            <a href="#section-header" className="scrollTo mobilNone">Главная</a>
                        </li>
                        <li>
                            <a href="#section-about" className="scrollTo">О компании</a>
                        </li>
                        <li>
                            <a href="#section-services" className="scrollTo">Галлерея</a>
                        </li>
                        <li>
                            <a href="#section-footer" className="scrollTo">Контакты</a>
                        </li>
                    </ul>
                </nav>

                <div className="socials socials__header">
                    <p>Мы в социальных сетях</p>
                    <div>
                        <a href="https://instagram.com/wellnesssystems.ru/?utm_medium=copy_link" target="_blank" style={{marginRight: "30px"}}>
                            <img className="socials__img" src={instagram} alt="instagram"/>
                        </a>
                        <a href="https://facebook.com/wellnesssystems/" target="_blank">
                            <img className="socials__img" src={facebook} alt="facebook"/>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SectionHeader