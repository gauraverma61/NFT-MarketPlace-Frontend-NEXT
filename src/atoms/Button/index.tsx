import React from "react";
import { useRouter } from "next/router";

interface IProps {
  text: string;
  variant: string;
  path?: any;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { text, variant, path } = props;
  const router = useRouter();
  const routrPushHandler = (path: string) => router.push(`/${path}`);
  return (
    <button
      onClick={() => {
        routrPushHandler(path);
      }}
      className={`button ${variant}`}
    >
      {text}
    </button>
  );
};

export default Button;
