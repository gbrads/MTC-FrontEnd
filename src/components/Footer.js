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

function Footer() {
  return (
    <FadeInSection>
      <footer className="Footer" style={{ backgroundImage: "url(/Images/bg11.png)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <div>
            <a href="#">
              <img src="/Images/main-logo.png"/>
            </a>
          </div>
          <h3>
            Meta Tattoo Club
          </h3>
          <div>
            <a href="https://twitter.com" className="socilLinks">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://discord.gg" className="socilLinks">
              <i className="fab fa-discord"></i>
            </a>
          </div>
          <p>All rights reserved</p>
        </div>
      </footer>
    </FadeInSection>
  );
}

export default Footer;
