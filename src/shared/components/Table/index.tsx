import { PropsWithChildren } from "react";

const Table = ({ children }: PropsWithChildren) => {
  return (
    <table
      className=" w-[70%] bg-bgTable m-auto p-6 shadow-lg border-2 border-borderTable"
      cellPadding={10}
    >
      {children}
    </table>
  );
};

export default Table;
