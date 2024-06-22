import { PropsWithChildren } from "react";
import Breadcrumb from "../Breadcrumb";
import H1 from "../H1";

interface IContainerProps {
  label: string;
}

const Container = ({
  label,

  children,
}: PropsWithChildren<IContainerProps>) => {
  return (
    <section className="flex flex-col gap-8 p-4 ">
      <Breadcrumb label={label} />
      <H1>{label}</H1>

      {children}
    </section>
  );
};

export default Container;
