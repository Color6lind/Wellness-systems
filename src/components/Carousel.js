import React from 'react'

import header from '../assets/img/header.jpg'

import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import CompanyPoster from "../sections/posters/CompanyPoster";
import ServicesPoster from "../sections/posters/ServicesPoster";
import ObjectsPoster from "../sections/posters/ObjectsPoster";
import ContactsPoster from "../sections/posters/ContactsPoster";

function Carousel() {

    $(document).ready(function () {
        let owl = $('.owl-carousel')

        owl.owlCarousel({
            items: 1,
            margin: 5,
            loop: false,
            nav: false,
            dots: false,
            touchDrag: false,
            mouseDrag: false,
            responsive: {
                0: {
                    touchDrag: true,
                    mouseDrag: true,
                    dots: true,
                },
                321: {
                    touchDrag: true,
                    mouseDrag: true,
                    dots: true,
                },
                480: {
                    touchDrag: true,
                    mouseDrag: true,
                    dots: true,
                    autoHeight: true
                },
                768: {
                    touchDrag: true,
                    mouseDrag: true,
                    autoHeight: true
                },
                1024: {
                    touchDrag: false,
                    mouseDrag: false,
                },
                1280: {},
                1366: {}
            }
        })

        $('.carousel-main').click(function () {
            owl.trigger('to.owl.carousel', 0)
        })

        $('.carousel-company').click(function () {
            owl.trigger('to.owl.carousel', 1)
        })

        $('.carousel-services').click(function () {
            owl.trigger('to.owl.carousel', 2)
        })

        $('.carousel-objects').click(function () {
            owl.trigger('to.owl.carousel', 3)
        })

        $('.carousel-contacts').click(function () {
            owl.trigger('to.owl.carousel', 4)
        })
    })

    return (
        <div className="carousel">
            <nav className="navigation">
                <ul className="navigation__ul">
                    <li>
                        <a className="carousel-main">Главная</a>
                    </li>

                    <li>
                        <a className="carousel-company">Компания</a>
                    </li>

                    <li>
                        <a className="carousel-services">Услуги</a>
                    </li>

                    <li>
                        <a className="carousel-objects">Объекты</a>
                    </li>

                    <li>
                        <a className="carousel-contacts">Контакты</a>
                    </li>
                </ul>
            </nav>

            <div className="owl-carousel owl-theme">
                <div className="item">
                    <img src={header} alt="hd" className="img__bg"/>
                </div>

                <div className="item">
                    <CompanyPoster/>
                </div>

                <div className="item">
                    <ServicesPoster/>
                </div>

                <div className="item">
                    <ObjectsPoster/>
                </div>

                <div className="item">
                    <ContactsPoster/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;