import { Link } from "react-router-dom";

interface ISideBarItem {
  icon: React.ReactNode;
  label: string;
  route: string;
}

const SideBarItem = ({ icon, label, route }: ISideBarItem) => {
  return (
    <Link
      to={route}
      className="flex items-center gap-4 p-1 text-lg px-4 relative text-white"
    >
      {icon}
      <p
        className="before:block before:absolute before:transition-all hover:before:bg-white before:hover:w-[6px]  before:rounded-lg before:hover:h-7 before:left-0 before:h-0 before:w-0
      "
      >
        {label}
      </p>
    </Link>
  );
};

export default SideBarItem;
