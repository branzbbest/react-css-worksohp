import React from "react";
import style from "./main.module.css";
import Button from "../Button";

function Navbar() {
  return (
    <>
      <div className={style.footer_container}>
        <div className={style.footer}>
          <div className={style.login_container}>
            <div className={style.login_button}>
              <button className={style.button}>Login</button>
            </div>
          </div>
          <div className={style.info_container}>
            <div className={style.info}>
              <div className={style.coppy_right}>Coppy right [Rattaphoom]</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
