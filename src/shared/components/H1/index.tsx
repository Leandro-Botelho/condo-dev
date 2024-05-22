import { PropsWithChildren } from "react";

interface H1Props {
  style?: React.CSSProperties;
}

const H1 = ({ children, style }: PropsWithChildren<H1Props>) => {
  return (
    <h1 className="text-3xl font-bold text-primary" style={style}>
      {children}
    </h1>
  );
};

export default H1;
