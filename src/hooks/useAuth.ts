import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useAppDispatch } from "@redux/store";
import { login } from "@redux/actions";
import { connectorsByName, ConnectorNames } from "src/Helpers/connectorByNames";
import { useRouter } from "next/router";

const pushToHome = () => {
  const router = useRouter();
  router.push("/");
};

const useAuth = () => {
  const context = useWeb3React<Web3Provider>();
  const router = useRouter();
  const { connector, activate, deactivate, active, account, chainId, library } =
    context;
  const dispatch = useAppDispatch();
  const isLoggedIn = account != undefined;

  const pushToHome = () => {
    router.push("/");
  };

  useEffect(() => {
    if (active) {
      dispatch(login(account?.toLowerCase()));
    }
  }, [active]);

  async function connect() {
    await deactivate();
    await activate(connectorsByName[ConnectorNames.Injected]);
    pushToHome();
  }

  return {
    connect,
    disconnect: deactivate,
    chainId,
    account,
    library,
    active,
    connector,
    isLoggedIn,
  };
};

export default useAuth;
