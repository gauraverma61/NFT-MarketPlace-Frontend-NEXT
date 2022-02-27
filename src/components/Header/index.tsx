import SearchInput from "@molecules/searchInput";
import React from "react";
import MainIcon from "@atoms/MainIcon";
import Button from "@atoms/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "src/hooks/useAuth";
import { is } from "immer/dist/internal";

const Header = () => {
  const router = useRouter();
  const { isLoggedIn, account, disconnect } = useAuth();

  const routerSigninPush = () => {
    router.push("/signin");
  };

  const routrPushHandler = (path: string) => router.push(`/${path}`);

  return (
    <div className="header d-flex justify-content-between align-items-center px-4">
      <Link href="/">
        <div className="heading_container">
          <MainIcon />
          <h4 className="heading_name">Sasible</h4>
        </div>
      </Link>
      <SearchInput />
      <div className="middle_container">
        <Link href="">
          <div className="option">Explore</div>
        </Link>
        <Link href="">
          <div className="option">My profile</div>
        </Link>
        <Link href="">
          <div className="option">Following</div>
        </Link>
        <Link href="">
          <div className="option">Activity</div>
        </Link>
        <Link href="">
          <div className="option">How it works</div>
        </Link>
        <Link href="">
          <div className="option">Community</div>
        </Link>
        <Link href="">
          <div className="option"></div>
        </Link>
      </div>
      <div className="right_container">
        <Button text={"Create"} variant={"dark"} />
        {!isLoggedIn ? (
          <Button
            clickHandler={routerSigninPush}
            text={"Sign in"}
            variant={"white"}
          />
        ) : (
          <Button
            clickHandler={disconnect}
            text={"Log out"}
            variant={"white"}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
