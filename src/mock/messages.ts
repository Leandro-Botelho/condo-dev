export interface IMessageProps {
  title: string;
  date: string;
  description: string;
  id: number;
}

export const messageMock: IMessageProps[] = [
  {
    id: 1,
    date: "20/12/2024",
    description: "No dia citado será feito a limpeza do condomínio",
    title: "Limpeza de prédio",
  },
  {
    id: 2,
    date: "31/12/2024",
    description: "Junte-se a nós na ceia do nosso prédio lá no térreo",
    title: "Ceia de ano novo",
  },
  {
    id: 3,
    date: "22/12/2024",
    description:
      "Caminhão de lixo irá fazer a coleta geral no nosso condomínio",
    title: "Coleta de lixo",
  },
  {
    id: 4,
    date: "15/12/2024",
    description: "Traga sua melhor fantasia para nossa festa do condomínio",
    title: "Festa a fantasia",
  },
];
