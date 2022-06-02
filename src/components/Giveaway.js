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
    <div className="container" style={{marginBottom: "20em"}}>
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
                              <img src="/Images/tattoo.png" className="img-fluid" />
                          </div>
                      </div>
                      
                      <div className="col-md-6 mt-5">
                      <FadeInSection>
                          <div>
                              <h2>Tattys & vacays</h2>
                              <p>
                              Mint a fully inked NFT god and win a trip for you and your person of choice to Gothenburg, Sweden. Get picked up in Saint Touch Limousine for a one week stay at the hotel Radisson. In addition to the luxurious stay, enjoy a full sleeve tattoo done by world renowned tattoo artist, Andreas Ishak.
                              </p>
                          </div>
                      </FadeInSection>
                      </div>
                  </div>
                </section>
        </FadeInSection>
        <FadeInSection>
                <section>
                  <div className="row align-items-center mt-5">
                      <div className="offset-md-1 col-md-4 mt-5">
                          <div className="frame1" style={{ backgroundImage: "url(/images/frame111.png)" }}>
                              <img src="/Images/rolex.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-md-6 mt-5">
                        <FadeInSection>
                          <div>
                              <h2>Rollie on My Wrist</h2>
                              <p>
                                Mint a gold NFT and win a brand new Rolex watch. Valued at over $15,000, there will be 5 lucky community members that will receive one of the various Rolexes. Let this Rolex be a symbol of someone who demands only the best (MTC).
                              </p>
                          </div>
                        </FadeInSection>
                      </div>
                  </div>
                </section>
        </FadeInSection>
        <FadeInSection>
                <section>
                  <div className="row align-items-center mt-5">
                      <div className="offset-md-1 col-md-4 mt-5">
                          <div className="frame1" style={{ backgroundImage: "url(/images/frame111.png)" }}>
                              <img src="/Images/lambo.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-md-6 mt-5">
                        <FadeInSection>
                          <div>
                              <h2>Keys to The Lambo</h2>
                              <p>
                                One week after the mint, every NFT holder will be entered into a draw to win the grand prize, a Lamborghini Huracan. Italian excellence meets Meta Tattoo Club for a prize of a life time!
                              </p>
                          </div>
                        </FadeInSection>
                      </div>
                  </div>
                </section>
        </FadeInSection>
    </div>
  );
}

export default Giveaway;
