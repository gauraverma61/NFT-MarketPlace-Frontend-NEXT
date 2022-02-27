import React from "react";
import MainIcon from "@atoms/MainIcon";
import MetaMaskIcon from "@assets/icons/metamask.svg";
import WalletConnectIcon from "@assets/icons/walletconnect.webp";
import Image from "next/image";
import useAuth from "../../src/hooks/useAuth"

interface walletbuttonIprops {
  text: string;
  icon: any;
  clickHandler?: React.MouseEventHandler<HTMLDivElement>;
  
}

const WalletButton = (props: walletbuttonIprops) => {
  const { text, icon, clickHandler } = props;
  return (
    <div onClick={clickHandler} className="wallet_button d-flex align-items-center">
      <Image src={icon} width="30px" height="30px" />
      <div className="button_text">{text}</div>
    </div>
  );
};

const SignIn = () => {
  const {connect, disconnect, chainId, isLoggedIn, account} = useAuth();
  console.log("account",account)
  return (
    <div className="signin w-100 container-fluid">
      <div className="row h-100">
        <div className="col-12 col-md-4 left h-100 d-flex align-items-center justify-content-center flex-column">
          <MainIcon size="big" />
          <h2>Sasible</h2>
        </div>
        <div className="col-12 col-md-8 right h-100">
          <h2>Sign in</h2>
          <p>
            Choose one of available wallet providers or create a new wallet.{" "}
            <span>What is a wallet?</span>
          </p>
          <WalletButton clickHandler={connect} text="Sign in with Metamask" icon={MetaMaskIcon} />
          <WalletButton text="Sign in with Wallet Connect" icon={WalletConnectIcon} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
