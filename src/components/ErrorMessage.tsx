import * as React from "react";

const ErrorMessageContainer: React.FC<{ errorMessage: string | null }> = ({
  errorMessage,
}) => {
  return <div>{errorMessage}</div>;
};
export default ErrorMessageContainer;
