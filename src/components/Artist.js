import React from "react";
import Video from "../Assets/vid.mp4";


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
    <section className="About" id="Artist" style={{marginBottom: "15em"}}>
      <div className="container" style={{marginBottom: 8 + 'em'}}>
          <FadeInSection>
            <h1 style={{marginBottom: 1 + 'em'}}>
            OUR <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>ARTIST</span>
            </h1>
          </FadeInSection>
          <FadeInSection>
            <div className="row align-items-center">
              <div className="col-md-6 mt-5">
                <div className="p-3">
                  <FadeInSection>
                    <h2>ANDREAS ISHAK</h2>
                  </FadeInSection>
                  <FadeInSection>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </FadeInSection>
                </div>
              </div>
              <div className="col-md-4 mt-5 text-start">
                <FadeInSection>
                  <video controls autostart autoPlay src="../Assets/vid.mp4" type="video/mp4" />
                </FadeInSection>
              </div>
            </div>
          </FadeInSection>
      </div>
    </section>
  );
}

export default About;

