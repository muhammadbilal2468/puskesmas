import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/login">
              <button>Masuk</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lp-banner">
        <div className="left">
          <h2>Puskesmas Pantoloan</h2>
          <p>Website Pendaftaran Puskesmas Pantoloan</p>
            <Link to="/login">
              <button>Masuk</button>
            </Link>
        </div>
        <div className="right">
          <img src={Logo1Img} alt="" />
        </div>
      </div>
      <div className="lp-card">
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
        <div className="card">
          <div className="card-staf">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="body">
              <p className="title">Sed ut perspiciatis</p>
              <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </div>
          </div>
       
          <div className="card-staf">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="body">
              <p className="title">Sed ut perspiciatis</p>
              <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </div>
          </div>
       
          <div className="card-staf">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="body">
              <p className="title">Sed ut perspiciatis</p>
              <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </div>
          </div>
       
          <div className="card-staf">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="body">
              <p className="title">Sed ut perspiciatis</p>
              <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
