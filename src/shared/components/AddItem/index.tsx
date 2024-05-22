import { Plus } from "lucide-react";

const AddItem = () => {
  return (
    <button className="absolute  right-[85px] bottom-[20px] bg-primaryBg rounded-full w-[65px] h-[65px] flex justify-center items-center cursor-pointer hover:opacity-80 transition-all">
      <Plus color="#fff" width={60} height={60} />
    </button>
  );
};

export default AddItem;
