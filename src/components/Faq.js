import React from "react";
import Accordion from "react-bootstrap/Accordion";

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

function Faq() {
  const [activeFaq, setActiveFaq] = React.useState();
  return (
    <FadeInSection>
      <section
        className="Faq"
        id="Faq">
        <div>
          <div className="container">
            <h1 className="mb-4">
              YOUR <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>ANSWERS</span>
            </h1>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    style={{ border: activeFaq === 0 ? "2px solid #d4af37" : "" }}
                    onClick={() => setActiveFaq(0)}
                  >
                    <Accordion.Header>When is the Official Launch Date?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    style={{ border: activeFaq === 1 ? "2px solid #d4af37" : "" }}
                    onClick={() => setActiveFaq(1)}
                  >
                    <Accordion.Header>How Much Will It Cost To Mint One?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="2"
                    style={{ border: activeFaq === 2 ? "2px solid #d4af37" : "" }}
                    onClick={() => setActiveFaq(2)}
                  >
                    <Accordion.Header>Will There Be A Pre-Sale?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    style={{ border: activeFaq === 3 ? "2px solid #d4af37" : "" }}
                    onClick={() => setActiveFaq(3)}
                  >
                    <Accordion.Header>What Secondary Market Will We Be Listed On?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Faq;
