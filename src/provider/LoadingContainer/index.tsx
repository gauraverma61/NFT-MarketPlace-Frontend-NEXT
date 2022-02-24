import { ReactElement } from "react";
import { Spinner } from "react-bootstrap";

interface IProps {
  children: ReactElement;
  isLoading: boolean | undefined;
}

const LoadingContainer: React.FC<IProps> = ({
  children,
  isLoading,
}: IProps) => {
  if (isLoading) {
    return (
      <div
        style={{ height: "75vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" />
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default LoadingContainer;
