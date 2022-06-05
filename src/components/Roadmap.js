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


function Roadmap() {
  return (
    <section className="About" id="Roadmap" style={{marginBottom: "15em"}}>
      <div className="container" style={{marginBottom: 8 + 'em'}}>
          <FadeInSection>
            <h1 style={{marginBottom: 1 + 'em'}}>
            THE <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>BLUEPRINT</span>
            </h1>
          </FadeInSection>
          <FadeInSection>
            <div>
              <img src="/Images/blueprint3.png" className="blueprint"/>
            </div>
          </FadeInSection>
      </div>
    </section>
  );
}

export default Roadmap;
