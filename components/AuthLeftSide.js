import React from "react";
import Image from "next/image";


function AuthLeftSide() {
  return (
    <>
      <div className="min-vh-100 left-side">
        <h3>Saqu Pay</h3>
        <div >
        <Image
          src="/phonedouble.png"
          width={500}
          height={600}
          className="image-logo"
        />
      </div>
        <p>App that Covering Banking Needs.</p>
        <p className="">
          Saqu Pay is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Saqu Pay everyday with worldwide users
          coverage.
        </p>
      </div>
    </>
  );
}

export default AuthLeftSide;
