import React from 'react'
import LoadingGif from './Pizza/loading.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>Data Loading...</h4>
            <img src={LoadingGif} alt="loading"/>
        </div>
    )
}
