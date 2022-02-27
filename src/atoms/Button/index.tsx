import React from "react";
import { useRouter } from "next/router";

interface IProps {
  text: string;
  variant: string;
  clickHandler?: any;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { text, variant, clickHandler } = props;
  const router = useRouter();
  const routrPushHandler = (path: string) => {
    if (path) {
      router.push(`/${path}`);
    }
  };
  return (
    <button
      onClick={clickHandler}
      className={`button ${variant}`}
    >
      {text}
    </button>
  );
};

export default Button;
