import moutain from "../assets/mountain.png"
import abouts from "../assets/about.json"

import Collapsible from "../componants/Collapsible"

function About() {


  const aboutsCollapsibles = abouts.map(about =>
    <Collapsible key={about.summary} summary={about.summary} content={<div>{about.content}</div>} />
  )

    return (
        <>
      <section className="hero-about">
        <img src={mountain} alt="" />
      </section>
      <section className="about">{aboutsCollapsibles}</section>
    </>
    );
  };
    
export default About;