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

function Artist() {
  return (
    <section className="Artist" id="Artist">
      <div>
        <div className="container">
        <FadeInSection>
          <div>
            <h1 className="titleHeading">
              OUR <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>ARTIST</span>
            </h1>
          </div>
        </FadeInSection>
          <FadeInSection>
            <div className="row align-items-center">
              <div className="offset-md-1 col-md-6 mt-5">
                <div className="p-3">
                  <h2>ANDREAS ISHAK</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-5 text-start">
                <video controls autostart autoPlay src="../Assets/vid.mp4" type="video/mp4" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

export default Artist;
