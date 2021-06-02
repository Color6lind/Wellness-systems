import React from 'react'
import arrowUp from '../assets/img/arrow-up.png'
import arrowDown from '../assets/img/arrow-down.png'

function LeftScrollbar({text, styles, up, down}) {
    return (
        <div className="scrollbar" style={styles}>
            <div>
                <p className="scrollbar__text">{text}</p>
                <span className="scrollbar__text__line"/>
            </div>
            <div className="scrollbar__navigation">
                <a href={up} className="scrollTo">
                    <img src={arrowUp} alt="up"/>
                </a>
                <a href={down} className="scrollTo">
                    <img src={arrowDown} alt="down"/>
                </a>
            </div>
        </div>
    )
}

export default LeftScrollbar