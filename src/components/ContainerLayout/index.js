import React from "react";
import style from "./main.module.css";
import "./reset.css";
import Navbar from "../Navbar";
import Body from "../Body";
import Footer from "../Footer";

function ContainLayout(props) {
  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </>
  );
}
export default ContainLayout;
