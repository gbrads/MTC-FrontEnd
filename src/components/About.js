import React from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function About() {
  return (
    <section className="About" id="About" style={{marginBottom: "15em"}}>
      <div className="container" style={{marginBottom: 8 + 'em'}}>
          <FadeInSection>
            <h1 style={{marginBottom: 1 + 'em'}}>
            A LOOK <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>INSIDE</span>
            </h1>
          </FadeInSection>
          <FadeInSection>
            <div className="">
              <p style={{marginBottom: 2 + 'em'}}>As the metaverse continues to evolve, so will our virtual avatars. With tattoos becoming a norm over the last decade, they are without a doubt going to come with us in to the virtual world and we want to be the ones that are in charge of this tattoo revolution that will happen in the metaverse.</p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <h2 style={{marginBottom: 1 + 'em'}}>WE'RE ALL GONNA BE INKED. (WAGBI)</h2>
          </FadeInSection>

          <FadeInSection>
            <p style={{marginBottom: 3 + 'em'}}>Our goal is for everyone be able to express themselves through the art of tattooing. With our team of experts, we are certain that we will become THE tattoo shop of Web3 and the real world. Imagine a place where you could put on or take off your tattoo within seconds without going through the hassle of sitting in a chair for 8-10 hours.</p>
          </FadeInSection>

          <FadeInSection>
            <div className="row">
              <div className="col-md-4">
                <div className="cards">
                <img src="/Images/team11.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="cards">
                  <img src="/Images/team12.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="cards">
                  <img src="/Images/team13.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </FadeInSection>
      </div>
    </section>
  );
}

export default About;
