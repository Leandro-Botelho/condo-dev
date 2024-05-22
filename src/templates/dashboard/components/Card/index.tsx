import { Link } from "react-router-dom";

interface ICardProps {
  title: string;
  data: string;
  fill: string;
  route: string;
}

const Card = ({ route, data, title, fill }: ICardProps) => {
  return (
    <Link
      to={`/main/${route}`}
      className={`${fill} text-white flex-1  h-[175px] rounded-xl text-3xl font-semibold shadow-md flex flex-col items-start p-4 justify-between `}
    >
      {title}
      <p className="text-xl">{data}</p>
    </Link>
  );
};

export default Card;
