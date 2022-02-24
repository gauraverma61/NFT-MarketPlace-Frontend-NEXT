import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import LoadingContainer from "./LoadingContainer";
import store from "@redux/store";
import Router from "next/router";
import SiteLayout from "./SiteLayout";

const Providers: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", () => setIsLoading(true));
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => setIsLoading(false));
  });
  return (
    <>
      <Provider store={store}>
        <LoadingContainer isLoading={isLoading}>
          <SiteLayout>{children}</SiteLayout>
        </LoadingContainer>
      </Provider>
    </>
  );
};

export default Providers;
