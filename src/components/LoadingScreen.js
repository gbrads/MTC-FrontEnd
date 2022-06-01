import React from "react";

function LoadingScreen() {
  return (
    <div>
      <section className="Home" id="Home" style={{ backgroundColor: "#000000", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div>
          <img className="logo" src="/Images/loader.gif" />
        </div>
      </section>
    </div>
  );
}

export default LoadingScreen;