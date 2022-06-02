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

function Welcome() {
  return (
    <section className="About" id="About" style={{marginTop: "4em"}}>
      <div className="container">
          <FadeInSection>
            <h1 style={{marginBottom: 1 + 'em'}}>
            <span style={{ backgroundImage: "linear-gradient(to bottom left, #d4af37, #e5cf87)" }}>META TATTOO CLUB</span>
            </h1>
          </FadeInSection>
          <FadeInSection>
            <p style={{marginBottom: 2 + 'em'}}>A collection of 10,000 steezy inked up gods making noise on the Sol blockchain. Some artists paint pictures, others create music, but we at MTC we like to use our bodies as the canvas for our art. This ones for the misfits, the rebels, the black sheep, the wild ones. There is always a place for you at the Meta Tattoo Club.</p>
          </FadeInSection>

          <FadeInSection>
            <p style={{marginBottom: 4 + 'em'}}>Meta Tattoo Club NFT is not just a JPEG NFT project. Our intention is to change & better people’s lives by being the lottery/raffle of the real world all while contributing to the evolution and development of Web3. We seek to be much more than just another everyday NFT project, but rather a global lifestyle brand that will also test the technological limit of decentralized blockchain. With already acquired land in The Sandbox, we will become the tattoo shop of Web3. In addition to the land in the metaverse, our team member and world renowned tattoo artist Andreas Ishak has his own tattoo shop in Sweden and we look to expand the chain and build high end tattoo shops all over the globe all under the name Meta Tattoo Club. Our guiding star is to have a community of like minded individuals, who can interact with one another in the real world and a virtual reality world, use our $STZ coin as a form of currency and get rewarded through our utilities.</p>
          </FadeInSection>
      </div>
    </section>
  );
}

export default Welcome;
