// also includes github / linkedin / portrolio / mail me (contact me) icons links

import React from "react";
// import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";
// import Github_anchor_svg from "./anchor_svg/Github_anchor_svg";
// import LinkedIn_anchor_svg from "./anchor_svg/LinkedIn_anchor_svg";
// import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";

type Props = {};

export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <small
      className="d-flex flex-column justify-content-center align-items-center h-100 text-light"
      style={{
        fontSize: "0.8rem",
        fontFamily:
          "'Montserrat', monospace, 'Roboto', Arial, Helvetica, sans-serif !important",
      }}
    >
      <div>
        &copy;<time dateTime={`${currentYear}`}>{currentYear}</time> Ilshaad
        Kheerdali
      </div>

      {/* github / linkedin / portolio links using bootstrap icons */}
      {/* <Container
        className="d-flex justify-content-center mt-1"
        data-testid="containerForPersonalLinks"
      > */}
      {/* github link to bug-tracker-ik repo */}
      {/* <Github_anchor_svg /> */}

      {/* link to linkedin  */}
      {/* <LinkedIn_anchor_svg /> */}

      {/* link to my porfolio site */}
      {/* <Portfolio_anchor_svg /> */}

      {/* link to mail me (contact me)*/}
      {/* <EmailMe_anchor_svg />
      </Container> */}
    </small>
  );
}
