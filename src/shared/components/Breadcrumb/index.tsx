import { Link } from "react-router-dom";

interface IBreadcrumb {
  label: string;
}

const Breadcrumb = ({ label }: IBreadcrumb) => {
  return (
    <div className="flex gap-1 ">
      <Link className="underline text-primary" to="/main">
        Painel
      </Link>
      <span className="font-light text-primary">/ {label}</span>
    </div>
  );
};

export default Breadcrumb;
