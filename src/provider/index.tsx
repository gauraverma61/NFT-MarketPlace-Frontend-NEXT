import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import LoadingContainer from "./LoadingContainer";
import MetamaskProvider from "./MetamaskProvider";
import store from "@redux/store";
import Router from "next/router";
import SiteLayout from "./SiteLayout";

const Providers: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setIsLoading(true));
    return () => {
      Router.events.on("routeChangeComplete", () => setIsLoading(false));
    };
  });

  return (
    <>
      <MetamaskProvider>
        <Provider store={store}>
          <LoadingContainer isLoading={isLoading}>
            <SiteLayout>{children}</SiteLayout>
          </LoadingContainer>
        </Provider>
      </MetamaskProvider>
    </>
  );
};

export default Providers;
