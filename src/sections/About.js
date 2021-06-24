import React from 'react'
import LeftScrollbar from "../components/LeftScrollbar"

import twenty from "../assets/img/20.png"
import eightHundred from "../assets/img/800.png"
import aboutImg from "../assets/img/about.jpg"

const links = {
    up: "#section-header",
    down: "#section-services"
}

function About() {
    return (
        <div id="section-about">
            <div className="container scrollbar-wrapper">
                <LeftScrollbar text="02" up={links.up} down={links.down}/>

                <div id="about">
                    <div className="about__background-wrapper">
                        <img src={aboutImg} alt="about background" id="about__img"/>
                    </div>

                    <div className="about__text">
                        <div className="about__text__width">
                            <p id="about__text__title">О компании</p>

                            <div className="about__text__group1">
                                <div className="about__text__group2-wrapper">
                                    <div className="about__text__group2">
                                        <p className="about__text__small">Мы создаем</p>
                                        <p id="about__text__wellness">WELLNESS</p>
                                        <p className="about__text__small" id="about__text__space">пространство</p>
                                    </div>

                                    <p id="about__text__medium">Больше</p>
                                </div>

                                <div id="about__text__group3">
                                    <p className="about__text__small" id="about__text__year">лет работы</p>

                                    <img src={twenty} alt="twenty" id="img__twenty"/>
                                </div>
                            </div>

                            <img src={eightHundred} alt="eight hundred" id="img__eight-hundred"/>

                            <p id="about__text__large">Выполненных проектов</p>
                        </div>
                    </div>

                </div>

                <p id="about__bottom__title">Проектирование и строительство </p>
            </div>
        </div>

    )
}

export default About