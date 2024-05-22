import { PropsWithChildren } from "react";

const TR = ({ children }: PropsWithChildren) => {
  return <tr className="border-b-2 border-borderTable">{children}</tr>;
};

export default TR;
