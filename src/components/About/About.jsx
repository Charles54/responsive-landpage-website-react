import React from 'react'

const About = (props) => {
  return (
    <div id='about'>
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quod voluptates numquam illo distinctio explicabo voluptatibus, inventore veritatis ab nobis facilis quia debitis aspernatur illum doloribus quibusdam aut unde dignissimos! Cumque unde excepturi vero nulla.</p>
                <button>{props.button}</button>
            
            </div>


    </div>
  )
}

export default About