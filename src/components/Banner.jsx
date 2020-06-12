import React from 'react'
import {GiBandit} from 'react-icons/gi';

export default function Banner({children,heroProp,titel,subtitel}) {
    return (
            <div className="banner" >
                <h1> <GiBandit style={{fontSize: 70}}/> {titel}</h1>
                <div></div>
                <p>{subtitel}</p>
                {children}
            </div>
    )
}
