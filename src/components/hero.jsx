/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
class Hero extends React.Component{
    // constructor(props){
    //    super(props) 
    // } 
    moveHero(){
        const hero = document.getElementById("hero");
        
    }

    render(){
        let h = 32;
        let w = 32;
        let x = 0;
        let y = 3;

        return(
            <div className="character"> 
                {/* <div
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
                </div> */}
                <img className="hero pixelart" src="/assets/images/hero/hero.png" alt="character"/>

            </div>
        )
    }
}

export default Hero;
