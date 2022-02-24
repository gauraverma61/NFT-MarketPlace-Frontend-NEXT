import Footer from "@components/Footer";
import Header from "@components/Header";
import React, { ReactElement } from "react";

const SiteLayout = ({children}:any) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default SiteLayout;
