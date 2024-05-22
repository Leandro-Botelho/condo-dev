import { Controller } from "react-hook-form";
import "./index.css";

interface ISmartInputProps {
  label: string;
}

const InputLogin = ({ label }: ISmartInputProps) => {
  return (
    <div className="inputBox">
      <input type="text" className="smartInput" placeholder=" " />
      <span className="label">{label}</span>
    </div>
  );
};

export default InputLogin;
