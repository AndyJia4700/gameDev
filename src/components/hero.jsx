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
        let h = 130;
        let w = 120;
        let x = 1;
        let y = 1;

        return(
            <div
                style={{
                    display: "inline-block",
                    height: `${h}px`,
                    width: `${w}px`,
                    backgroundImage: "url(/assets/images/hero/hero.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `-${150 * x}px -${150 * y}px`,
                    border: "1px solid"
                }}
            >

            </div>
        )
    }
}

export default Hero;
