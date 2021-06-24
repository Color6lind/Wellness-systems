import React from 'react'

import LeftScrollbar from "../components/LeftScrollbar"

import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'
import Carousel from "../components/Carousel"


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

                        <div className="title__social__links">
                            <a href="https://instagram.com/wellnesssystems.ru/?utm_medium=copy_link" target="_blank"
                               rel="noreferrer">
                                <img className="socials__img" src={instagram} alt="instagram"/>
                            </a>

                            <a href="https://facebook.com/wellnesssystems/" target="_blank" rel="noreferrer">
                                <img className="socials__img" src={facebook} alt="facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navigation-wrapper">
                <div className="burger--wrapper">
                    <div className="header__burger">
                        <span/>
                    </div>
                </div>

                <Carousel/>
            </div>
        </div>
    )
}

export default SectionHeader