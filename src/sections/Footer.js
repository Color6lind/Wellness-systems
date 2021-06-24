import React from 'react'
import LeftScrollbar from "../components/LeftScrollbar"
import FooterMap from "../components/Map"
import Form from "../components/Form"

import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'

const links = {
    up: "#section-services",
    down: "#section-footer"
}

function Footer() {
    return (
        <div id="section-footer">
            <div className="container scrollbar-wrapper">
                <FooterMap/>
                <LeftScrollbar text="04" up={links.up} down={links.down}/>
                <footer>
                    <div className="contact-wrapper">
                        <div className="contact-width">
                            <div className="footer__title-wrapper">
                                <span className="footer--large">Связаться с нами</span>

                                <div className="socials socials__footer">
                                    <a href="https://instagram.com/wellnesssystems.ru/?utm_medium=copy_link"
                                       className="socials__footer__size" target="_blank">
                                        <img src={instagram} alt="instagram"/>
                                    </a>

                                    <a href="https://facebook.com/wellnesssystems/" className="socials__footer__size"
                                       target="_blank">
                                        <img src={facebook} alt="facebook"/>
                                    </a>
                                </div>
                            </div>

                            <div className="footer__text-wrapper">
                                <p className="footer--medium">Офис продаж</p>

                                <p className="footer--small">Новосибирск, Фабричная 31, 1 этаж Выставочный центр
                                    Мельница</p>
                            </div>

                            <div className="footer__text-wrapper">
                                <p className="footer--medium">Режим работы</p>

                                <p className="footer--small">Пн - Пт с 9:00 до 18:00</p>
                            </div>

                            <div className="footer__text-wrapper">
                                <p className="footer--medium">Телефон</p>

                                <a href="tel: +7 (383)-236-26-36" className="footer--small">+7 (383)-236-26-36</a>
                            </div>
                        </div>
                    </div>

                    <div className="form-wrapper">
                        <Form/>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer