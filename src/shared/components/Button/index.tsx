import { PropsWithChildren } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

const Button = ({ className, children }: PropsWithChildren<ButtonProps>) => {
  return <button className={className}>{children}</button>;
};

export default Button;
