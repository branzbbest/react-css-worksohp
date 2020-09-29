import React from "react";
import style from "./main.module.css";

function Navbar() {
  return (
    <>
      <div className={style.navbar_container}>
        <div className={style.navbar}>
          <div className={style.logo_container}>
            <div className={style.logo} />
          </div>
          <div className={style.signin_container}>
            <div className={style.signin_button}>
              <button className={style.button}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
