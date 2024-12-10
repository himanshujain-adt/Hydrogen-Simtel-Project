import React from "react";
import pixelcutImage from './assets/shared/pixelcut-export.png';
import './css-files/homepage.css';

function HomePage() {
    return (
        <>
            <div id="app">
                <img src={pixelcutImage} />
                <div id="rel">
                    <h2 id="sim-title">HYDROGEN SIMTEL LEARNING</h2>
                    <Button variant="contained" color="primary">Enter</Button>
                </div>


            </div>
        </>

    )
}
export default HomePage;