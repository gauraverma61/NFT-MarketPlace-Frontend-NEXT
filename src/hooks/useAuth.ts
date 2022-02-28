import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useAppDispatch } from "@redux/store";
import { login } from "@redux/actions";
import { useEagerConnect, useInactiveListener } from "../Helpers/web3Hooks";
import { connectorsByName, ConnectorNames } from "src/Helpers/connectorByNames";
import { useRouter } from "next/router";

const pushToHome = () => {
  const router = useRouter();
  router.push("/");
};

const useAuth = () => {
  const context = useWeb3React<Web3Provider>();
  const router = useRouter();
  const [activatingConnector, setActivatingConnector] = useState<any>();
  const { connector, activate, deactivate, active, account, chainId, library } =
    context;
  console.log("account", account)
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);
  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

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
