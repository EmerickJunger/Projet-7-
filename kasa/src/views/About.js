import heroAbout from "../assets/hero-about.png"
import abouts from "../assets/about.json"

import Collapsible from "../components/Collapsible"

function About() {


  const aboutsCollapsibles = abouts.map(about =>
    <Collapsible key={about.summary} summary={about.summary} content={<div>{about.content}</div>} />
  )

    return (
        <>
      <section className="hero-about">
        <img src={heroAbout} alt="" />
      </section>
      <section className="about">{aboutsCollapsibles}</section>
    </>
    );
  };
    
export default About;