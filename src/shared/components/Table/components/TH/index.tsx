interface ThProps {
  title: string;
  style?: React.CSSProperties;
}

const TH = ({ title, style }: ThProps) => {
  return (
    <th
      style={style}
      className="text-2xl p-4 text-center border-r-2 border-borderTable text-txPrimary  w-[60%]"
    >
      {title}
    </th>
  );
};

export default TH;
