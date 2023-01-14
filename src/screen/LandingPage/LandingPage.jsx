import React from "react";
import { Logo1Img } from "../../asset";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="lp">
      <div className="lp-header">
        <div className="logo">
          <img src={Logo1Img} alt="logo_puskesmas" />
          <h3>Puskesmas Pantoloan</h3>
        </div>
        <div className="menu">
          <div className="btn-menu">
            <a href="">Beranda</a>
            <a href="">Fasilitas</a>
            <a href="">Kontak</a>
            <a href="">Tentang</a>
          </div>
          <div className="btn-login">
            <button>Masuk</button>
          </div>
        </div>
      </div>
      <div className="lp-banner">
        <div className="left">
          <h2>Puskesmas Pantoloan</h2>
          <p>Website Pendaftaran Puskesmas Pantoloan</p>
          <button>Masuk</button>
        </div>
        <div className="right">
          <img src={Logo1Img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
