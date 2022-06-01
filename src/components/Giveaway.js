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

function Giveaway() {

  return (
    <div className="container" style={{marginBottom: "5em"}}>
      <FadeInSection>
          <div>
            <h1 className="RoadTitle">
              TIME FOR <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>GIVEAWAYS</span>
            </h1>
          </div>
      </FadeInSection>
      <FadeInSection>
        <div class="sticky-container">
          <main>
            <section class="GiveSection">
              <h4>Tattys & Vacays</h4>
            </section>
            <section class="GiveSection">
              <h4>Rollie on My Wrist</h4>
            </section>
            <section class="GiveSection">
              <h4>Keys to The Lambo</h4>
            </section>
          </main>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Giveaway;
