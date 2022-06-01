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

const Roadmap = () => (
  <section className="Roadmap" id="Roadmap">
    <div className="container" style={{marginBottom: "5em"}}>
      <FadeInSection>
            <h1 style={{marginBottom: 0.5 + 'em'}}>
            THE <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>BLUEPRINT</span>
            </h1>
          </FadeInSection>

      <FadeInSection>
        <div>
        <img src="/images/blueprint.png" className="blueprint"/>
        </div>
      </FadeInSection>

    </div>
  </section>
);

export default Roadmap;