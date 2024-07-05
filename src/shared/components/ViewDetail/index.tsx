interface IViewDetails {
  title: string;
  text: string;
}

const ViewDetails = ({ text, title }: IViewDetails) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-lg ">{title}</p>
      <span className="bg-gray-100 p-2 w-full rounded-lg">{text}</span>
    </div>
  );
};

export default ViewDetails;
