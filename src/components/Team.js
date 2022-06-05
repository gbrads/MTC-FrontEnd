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

function Team() {
  return (
    <section className="Team" id="Team" style={{marginBottom: "15em"}}>
      <div className="container" style={{marginBottom: 8 + 'em'}}>
          <FadeInSection>
            <h1 style={{marginBottom: 1 + 'em'}}>
            CORE <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>TEAM</span>
            </h1>
          </FadeInSection>
          <div className="row">
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src="/Images/team11.png" className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Tommy</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Position</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src="/Images/team11.png" className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Tommy</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Position</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src="/Images/team11.png" className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Tommy</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Position</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src="/Images/team11.png" className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Tommy</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Position</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src="/Images/team11.png" className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Tommy</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Position</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src="/Images/team11.png" className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Tommy</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Position</p>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Team;
