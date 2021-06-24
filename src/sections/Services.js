import React from 'react'
import LeftScrollbar from "../components/LeftScrollbar"

import swimmingPool from "../assets/img/swimming_pool.jpg"
import saunas from "../assets/img/saunas.jpg"
import salt from "../assets/img/salt.jpg"
import hamams from "../assets/img/hamams.jpg"
import steel from "../assets/img/steel.jpg"
import fountains from "../assets/img/fountains.jpg"

const links = {
    up: "#section-about",
    down: "#section-footer"
}

function Services() {
    return (
        <div id="section-services">
            <div className="container scrollbar-wrapper">
                <LeftScrollbar text="03" up={links.up} down={links.down}/>

                <div id="services">

                    <div className="services__block">
                        <img src={swimmingPool} alt="swimming pool" id="services__img1"
                             className="services__block__img"/>

                        <p className="services__block__text"
                           id="services__txt1">Бассейны</p>
                    </div>

                    <div className="services__block text-right">
                        <p className="services__block__text"
                           id="services__txt2">Бассейны из нержавеющей стали</p>

                        <img src={steel} alt="steel" id="services__img2"
                             className="services__block__img"/>
                    </div>

                    <div className="services__block">
                        <img src={saunas} alt="saunas" id="services__img3"
                             className="services__block__img "/>

                        <p className="services__block__text"
                           id="services__txt3">Сауны</p>
                    </div>

                    <div className="services__block text-right">
                        <p className="services__block__text"
                           id="services__txt4">Хаммамы</p>

                        <img src={hamams} alt="hamams" id="services__img4"
                             className="services__block__img"
                        />
                    </div>

                    <div className="services__block">
                        <img src={fountains} alt="fountains" id="services__img5"
                             className="services__block__img"
                        />

                        <p className="services__block__text"
                           id="services__txt5">Фонтаны</p>
                    </div>

                    <div className="services__block text-right">
                        <p className="services__block__text"
                           id="services__txt6">Соляные комнаты</p>

                        <img src={salt} alt="salt" id="services__img6"
                             className="services__block__img"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services