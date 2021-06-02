import React, {useEffect} from 'react'

function init() {
    let myMap, Balloon

    myMap = new ymaps.Map('map', {
        center: [55.019155, 82.911896],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    }, {
        searchControlProvider: 'yandex#search'
    })

    Balloon = new ymaps.Placemark([55.019155, 82.911896], {
        balloonContentHeader: "Wellness system",
        balloonContentBody: [
            '<address>',
            'Фабричная 31',
            '<br/>',
            'Выставочный центр Мельница',
            '<br/>',
            '1 этаж ',
            '<br/>',
            '</address>'
        ].join(''),
        balloonContentFooter: [
            '<strong>Пн - Пт с 9:00 до 18:00<strong/>'
        ]
    }, {
        preset: 'islands#redDotIcon'
    })

    myMap.geoObjects.add(Balloon)
}

function FooterMap() {
    useEffect(() => {
        ymaps.ready(init)
    }, [])

    return (
        <div className="place">
            <div className="place-wrapper">
                <div className="place__text">
                    <p className="footer--large" style={{marginBottom: "20px"}}>Ждём Вас</p>
                    <p className="footer--small">Приезжайте к нам в офис для обсудения деталей</p>
                </div>
            </div>

            <div className="map-wrapper">
                <div id="map"/>
            </div>
        </div>
    )
}

export default FooterMap