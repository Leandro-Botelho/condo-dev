interface ITextarea {
  rows: number;
  placeholder: string;
}

const Textarea = ({ rows, placeholder }: ITextarea) => {
  return (
    <textarea
      className="bg-primaryBg rounded-sm border-border border-[1px] text-lg  px-3 py-2 outline-none placeholder:text-white"
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
