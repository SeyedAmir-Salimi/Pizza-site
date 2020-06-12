import React from 'react'

export default function Hero({children,heroProp}) {
    return (
        <header className={heroProp}>
            <div>
                {children}
            </div>
        </header>
    )
}
