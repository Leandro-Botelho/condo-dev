import { PropsWithChildren } from "react";

const TD = ({ children }: PropsWithChildren) => {
  return (
    <td className="p-3 px-6 text-txPrimary text-xl border-r-2 border-borderTable">
      {children}
    </td>
  );
};

export default TD;
