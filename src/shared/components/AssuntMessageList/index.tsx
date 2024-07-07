interface AssuntMessageListProps {
  titleMessage?: string;
  assuntMessage?: string;
}

const AssuntMessageList = ({
  assuntMessage,
  titleMessage,
}: AssuntMessageListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{assuntMessage}</h2>
      <p className="bg-gray-200 p-3 rounded-lg text-lg">{titleMessage}</p>
    </div>
  );
};

export default AssuntMessageList;
