/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../public/assets/stylesheets/map.css';
class Hero extends React.Component{
    // constructor(props){
    //    super(props) 
    // } 
    moveHero(){
        const hero = document.getElementById("hero");
        
    }

    render(){
        <Map/>
        let h = 32;
        let w = 32;
        let x = 0;
        let y = 3;

        return(
            <div className="map"> 
                <div
                    style={{
                        display: "inline-block",
                        height: `${h}px`,
                        width: `${w}px`,
                        backgroundImage: "url(/assets/images/hero/hero.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: `-${32 * x}px -${32 * y}px`,
                        border: "1px solid"
                    }}
                >

                </div>
            </div>
        )
    }
}

export default Hero;
