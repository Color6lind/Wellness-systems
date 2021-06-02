import React from 'react'
import LeftScrollbar from "../components/LeftScrollbar"

import swimmingPool from "../assets/img/swimming_pool.jpg"
import saunas from "../assets/img/saunas.jpg"
import baths from "../assets/img/baths.jpg"
import hamams from "../assets/img/hamams.jpg"

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
                    <div className="services-wrapper">

                        <div
                            className="services__block services__block__group1"
                            id="services__block__1"
                        >
                            <div className="services__block__style" id="swimming-pool">
                                <div id="swimming-pool__text-wrapper">
                                    <p
                                        className="services__block__text services__block__text-48 services__block__text__right"
                                        id="swimming-pool__text"
                                    >Бассейны</p>
                                </div>

                                <img
                                    src={swimmingPool}
                                    alt="swimming pool"
                                    id="swimming-pool__img"
                                    className="services__block__img services__block__img__left"
                                />
                            </div>

                        </div>

                        <div
                            className="services__block services__block__group1"
                            id="services__block__2"
                        >
                            <div className="services__block__style" id="saunas">
                                <div id="saunas__text-wrapper">
                                    <p
                                        className="services__block__text services__block__text-48 services__block__text__left"
                                        id="saunas__text"
                                    >Сауны</p>
                                </div>

                                <div id="white__block-1">
                                    <p className="white__block__title">Проектирование и строительство </p>
                                    <p className="white__block__p">Быстро и качественно</p>
                                </div>

                                <img
                                    src={saunas}
                                    alt="saunas"
                                    id="saunas__img"
                                    className="services__block__img services__block__img__right"
                                />
                            </div>

                        </div>

                        <div
                            className="services__block services__block__group2"
                            id="services__block__3"
                        >
                            <div className="services__block__style" id="baths">
                                <div id="baths__text-wrapper">
                                    <p
                                        className="services__block__text services__block__text-64 services__block__text__right"
                                        id="baths__text"
                                    >Бани</p>
                                </div>

                                <img
                                    src={baths}
                                    alt="baths"
                                    id="baths__img"
                                    className="services__block__img services__block__img__left"
                                />
                            </div>

                        </div>

                        <div
                            className="services__block services__block__group2"
                            id="services__block__4"
                        >
                            <div className="services__block__style" id="hamams">
                                <div id="hamams__text-wrapper">
                                    <p
                                        className="services__block__text services__block__text-64 services__block__text__left"
                                        id="hamams__text"
                                    >Хамамы</p>
                                </div>

                                <div id="white__block-2">
                                    <p className="white__block__title">Создаем любое наполнение аква-термального
                                        комплекса</p>
                                    <p className="white__block__p">любого вида и сложности “под ключ”</p>
                                </div>

                                <img
                                    src={hamams}
                                    alt="hamams"
                                    id="hamams__img"
                                    className="services__block__img services__block__img__right"
                                />
                            </div>
                            <a href="/#" id="fullList">Полный список оказываемых нами услуг </a>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services