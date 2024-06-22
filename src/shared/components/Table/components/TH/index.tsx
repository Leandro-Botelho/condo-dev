interface ThProps {
  title: string;
  className?: string;
  width?: string;
}

export const TH = ({ title, className }: ThProps) => {
  return (
    <th
      className={`${className} text-2xl p-4 text-center border-r-2 border-borderTable text-txPrimary`}
    >
      {title}
    </th>
  );
};
