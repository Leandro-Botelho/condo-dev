export interface IUsersProps {
  name: string;
  condominium: string;
  apartment: string;
  town: string;
  id: number;
}

export interface UserProps {
  user: IUsersProps;
}

export const usersMock: IUsersProps[] = [
  {
    id: 1,
    name: "Leandro",
    condominium: "Condominio algum lugar",
    apartment: "306",
    town: "Brasília",
  },
  {
    id: 2,
    name: "Crys",
    condominium: "Condominio Paraíso",
    apartment: "106",
    town: "Riacho Fundo 1",
  },
  {
    id: 3,
    name: "Lucas",
    condominium: "Condominio Sol da manhã",
    apartment: "514",
    town: "Nova iguaçu",
  },
  {
    id: 4,
    name: "Rubens",
    condominium: "Condominio Brasa de fogo",
    apartment: "910",
    town: "Rio de Janeiro",
  },
  {
    id: 5,
    name: "Sandra",
    condominium: "Condominio Céu",
    apartment: "605",
    town: "Goiânia",
  },
];
