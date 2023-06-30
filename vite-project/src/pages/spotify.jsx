import React from 'react'
import './spotify.css'
import image1 from "../assets/Spotify_logo.png"

const spotify = () => {
    return (
        <>
            <div class="nav-btn">
                <i class="fa fa-bars fa-2x"></i>
                <i class="fa fa-close fa-2x"></i>
            </div>
            <div class="container">
                <nav class="main-nav">
                    <img class="spotify-logo" src={image1} />
                    <ul class="nav-options">
                        <li><a href="#" class="white-text green">Premium</a></li>
                        <li><a href="#" class="white-text green">Help</a></li>
                        <li><a href="#" class="white-text green">Download</a></li>
                        <li><div class="line"></div></li>
                        <li><a href="#" class="grey-text green">Sign up</a></li>
                        <li><a href="#" class="grey-text green">Log In</a></li>
                        <img class="spotify-logo-sidebar display" src="src/assets/Spotify_logo.png" />
                    </ul>
                </nav>
                <div class="cards">
                    <div class="card-2">
                        <div class="card2-text-container">
                            <h1 class="card2-text">Music for everyone.</h1>
                            <h5 class="card2-text2">Millions of songs. No credit card needed.</h5>
                            <a class="btn-green-card2 btn-white-text"><h5>GET SPOTIFY FREE</h5></a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default spotify