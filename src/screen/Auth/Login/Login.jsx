import React, { useState } from "react";
import { Logo1Img } from "../../../asset";
import "./Login.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="login">
      <div className="login-box">
        <div className="left">
          <p className="title">Hi, Selamat Datang</p>
          <p className="desc">Silahkan Masukkan Email dan Kata Sandi</p>
          <form action="">
            <label htmlFor="">Email</label>
            <div className="input-box">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" />
            </div>
            <label htmlFor="">Kata Sandi</label>
            <div className="input-box-pass">
              <i class="fa-solid fa-lock"></i>
              <input type={showPass ? "text" : "password"} />
              <i
                className={showPass ? "fa-regular fa-eye" : "fa-solid fa-eye"}
                onClick={togglePassword}
              ></i>
            </div>
            <p className="forget-pass">Lupa Sandi ?</p>
            <button type="submit">Masuk</button>
            <p className="dont-have-acc">
              Tidak Punya Akun ? <span>Daftar Sekarang</span>
            </p>
          </form>
        </div>
        <div className="right">
          <img src={Logo1Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
