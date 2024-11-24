import React from "react";
import "./AboutFLL.css";
import fll_image from "../../images/fll.png";
import photo from "../../images/centarNit.jpeg";

export default function AboutFLL() {
  return (
    <div className="fll_wrapper">
      <h1>O FLL takmičenju - First Lego League</h1>

      <p className="aboutFLL">
        First LEGO League takmičenje nije samo događaj, već prava avantura koja
        nas vodi kroz svet nauke, tehnologije i timskog rada. Kroz svaki izazov,
        ne samo što učimo o tehnologiji, već i o važnosti saradnje, komunikacije
        i poverenja. Deljenje radosti uspeha, prevazilaženje izazova zajedno i
        podrška u teškim trenucima čine nas ne samo boljim timom, već i boljim
        ljudima. Dok se suočavamo sa problemima i trudimo se da pronađemo
        kreativna rešenja, učimo ne samo o naučno-tehničkim konceptima, već i o
        važnosti upornosti, prijateljstva i timskog duha. Svaki korak na ovom
        putovanju obogaćuje nas novim iskustvima, učenjima i prijateljstvima
        koja će trajati celog života. Zato hvala našim mentorima na neumornoj
        podršci, našim prijateljima na inspiraciji i podršci i svim učesnicima
        koji zajedno sa nama čine FLL takmičenje nezaboravnom avanturom učenja,
        rasta i prijateljstva!
      </p>
      <img src={fll_image} alt="Slika_FLL"></img>
      <h2 className="subtitle">
        Ovo je nasa grupa sada, zavrsili smo drugi ciklus - Javascript, HTML i
        CSS.
      </h2>
      <p>
        Vestine koje smo stekli tokom ova dva ciklusa, koristimo za kreiranje
        ove stranice
      </p>
      <img className="current_photo" src={photo} alt="trenutna"></img>
    </div>
  );
}
