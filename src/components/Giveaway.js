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
            <h1>
              TIME FOR <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>THE GIVEAWAYS</span>
            </h1>
          </div>
      </FadeInSection>
      <FadeInSection>
                <section>
                  <div className="row align-items-center mt-5">
                      <div className="offset-md-1 col-md-4 mt-5">
                          <div className="frame1" style={{ backgroundImage: "url(/images/frame111.png)" }}>
                              <img src="/images/nft3.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-md-6 mt-5">
                          <div>
                              <h2>Tattys & Vacays</h2>
                              <p>
                              Mint a fully inked NFT god and win a trip for you and your person of choice to Gothenburg, Sweden. Get picked up in Saint Touch Limousine for a one week stay at the hotel Radisson. In addition to the luxurious stay, enjoy a full sleeve tattoo done by world renowned tattoo artist, Andreas Ishak.
                              </p>
                          </div>
                      </div>
                  </div>
                </section>
        </FadeInSection>
        <FadeInSection>
                <section>
                  <div className="row align-items-center mt-5">
                      <div className="offset-md-1 col-md-4 mt-5">
                          <div className="frame1" style={{ backgroundImage: "url(/images/frame111.png)" }}>
                              <img src="/images/nft3.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-md-6 mt-5">
                          <div>
                              <h2>Rollie on My Wrist</h2>
                              <p>
                              Mint a fully inked NFT god and win a trip for you and your person of choice to Gothenburg, Sweden. Get picked up in Saint Touch Limousine for a one week stay at the hotel Radisson. In addition to the luxurious stay, enjoy a full sleeve tattoo done by world renowned tattoo artist, Andreas Ishak.
                              </p>
                          </div>
                      </div>
                  </div>
                </section>
        </FadeInSection>
        <FadeInSection>
                <section>
                  <div className="row align-items-center mt-5">
                      <div className="offset-md-1 col-md-4 mt-5">
                          <div className="frame1" style={{ backgroundImage: "url(/images/frame111.png)" }}>
                              <img src="/images/nft3.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-md-6 mt-5">
                          <div>
                              <h2>Keys to The Lambo</h2>
                              <p>
                              Mint a fully inked NFT god and win a trip for you and your person of choice to Gothenburg, Sweden. Get picked up in Saint Touch Limousine for a one week stay at the hotel Radisson. In addition to the luxurious stay, enjoy a full sleeve tattoo done by world renowned tattoo artist, Andreas Ishak.
                              </p>
                          </div>
                      </div>
                  </div>
                </section>
        </FadeInSection>
    </div>
  );
}

export default Giveaway;
