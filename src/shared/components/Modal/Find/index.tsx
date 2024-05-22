interface IModalViewFindItem {
  itemsFind: {
    title: string;
    location: string;
    nameFind: string;
    id: number;
    contact: string;
    description: string;
  };
}

const ModalViewFindItem = ({ itemsFind }: IModalViewFindItem) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h3 className="text-2xl text-center border-b-[1px]  pb-2 border-borderTable font-semibold text-primary ">
        {itemsFind.title}
      </h3>
      <ul className="flex flex-col gap-2">
        <li className="text-primary text-xl">
          <strong className="text-primary">Condomínio:</strong>{" "}
          {itemsFind.location}
        </li>
        <li className="text-primary text-xl">
          <strong className="text-primary">Achou:</strong> {itemsFind.nameFind}
        </li>
        <li className="text-primary text-xl">
          <strong className="text-primary">Contato:</strong> {itemsFind.contact}
        </li>
      </ul>
      <p className="bg-gray-200 p-2 text-lg  text-primary h-[100px]  rounded-lg">
        {itemsFind.description}
      </p>
    </div>
  );
};

export default ModalViewFindItem;
