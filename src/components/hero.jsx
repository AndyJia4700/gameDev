/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
class Hero extends React.Component{

    placeCharacter(){
        const directions = {
            up: "up",
            down: "down",
            left: "left",
            right: "right",
        };
        const hero = document.querySelector(".character");
        const map = document.querySelector(".map");
        const speed = 2;
        const heldDirections = [];
        const pixelSize = parseInt(
            
            getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
        )
 
        const heldDirection = heldDirections[0];
        if (heldDirection){
            





        }
        
    }

    render(){
        

        
        
        return(
            <div className="camera">
                <div className="map pixelart">
                    <div className="character"> 
                        <img className="hero pixelart" src="/assets/images/hero/hero.png" alt="character"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;
