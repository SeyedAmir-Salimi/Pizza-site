import React from 'react'

import LogoWhite from '../images/LogoWhite.svg'

export default function Banner({children,heroProp,titel,subtitel}) {
    return (
            <div className="banner" >
                <h1><img src={LogoWhite} alt="LogoWhite" style={{ width: "5rem" , marginRight : "1rem"}} />{titel}</h1>
                <div></div>
                <p>{subtitel}</p>
                {children}
            </div>
    )
}
