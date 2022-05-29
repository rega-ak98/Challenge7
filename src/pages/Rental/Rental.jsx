import React from "react";
import Chart from "../../components/Chart/Chart";
import FooterDetail from "../../components/FooterDetail/FooterDetail";
import HeaderDetail from "../../components/HeaderDetail/HeaderDetail";
import NavbarDetail from "../../components/NavbarDetail/NavbarDetail";

function Rental() {
  return (
    <>
      <NavbarDetail />
      <HeaderDetail />
      <Chart />
      <FooterDetail />
    </>
  );
}

export default Rental;