import { PropsWithChildren } from "react";

interface TDProps {
  className?: string;
}

export const TD = ({ className, children }: PropsWithChildren<TDProps>) => {
  return (
    <td
      className={`p-3 px-6 text-txPrimary text-xl border-r-2 border-borderTable ${className}`}
    >
      {children}
    </td>
  );
};
