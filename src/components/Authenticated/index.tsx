import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "src/hooks/useAuth";
import { useSelector } from "react-redux";
import { selectUserAddress } from "@redux/slices/user/selector";

const Authenticated = ({ children }: any) => {
  const router = useRouter();
  const account = useSelector(selectUserAddress);

  useEffect(() => {
    if (!account) {
      router.push("/signin");
    }
  }, [account]);

  return <>{children}</>;
};

export default Authenticated;
