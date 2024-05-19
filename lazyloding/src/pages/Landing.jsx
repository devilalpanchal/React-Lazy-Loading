import React from "react";

console.log("landing page redered");
const Landing = () => {
  return (
    <>
      <section>
        <div>
          <div style={{ display: "flex", alignContent: "center", gap: "20px" }}>
            <button>Login</button>
            <button>LogOut</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
