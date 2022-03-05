import React, { useState } from "react";
import SearchInput from "@molecules/searchInput";
import MainIcon from "@atoms/MainIcon";
import Button from "@atoms/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "src/hooks/useAuth";
import useWidth from "src/hooks/useWidth";
import { useAppDispatch } from "@redux/store";
import { login, logout } from "@redux/actions";
import SearchIcon from "@atoms/SearchIcon";
import CrossIcon from "@atoms/CrossIcon";

const Header = () => {
  const router = useRouter();
  const width = useWidth();
  
  const [showBigSearchContainer, setShowBigSearchContainer] = useState(false);

  const dispatch = useAppDispatch();
  const { isLoggedIn, account, disconnect } = useAuth();

  const routerSigninPush = () => {
    router.push("/signin");
  };

  const logOutHandler = async () => {
    dispatch(logout());
    await disconnect();
  };

  return (
    <>
      {width < 768 && showBigSearchContainer && <div className="bigsearch_container d-flex flex-column w-100">
        <div className="bigsearchbar_container d-flex align-items-center p-3 p-md-4">
          <CrossIcon clickHandler={()=>setShowBigSearchContainer(false)} />
          <SearchInput />
        </div>
        <div className="list_container p-3 p-md-4"></div>
      </div>}
      <div className="header d-flex justify-content-between align-items-center px-4">
        <Link href="/">
          <div className="heading_container">
            <MainIcon />
            {width > 768 && <h4 className="heading_name">Sasible</h4>}
          </div>
        </Link>
        {width > 1200 ? <SearchInput /> : <SearchIcon clickHandler={()=>setShowBigSearchContainer(true)} />}

        {width > 1200 && (
          <div className="middle_container mx-3">
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
        )}
        {width > 1200 && (
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
                clickHandler={logOutHandler}
                text={"Log out"}
                variant={"white"}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
