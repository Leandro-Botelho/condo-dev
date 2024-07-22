import { ptBR } from "date-fns/locale";
import { format, parseISO } from "date-fns";

export const formatterDateToBr = (date: string) => {
  const dateFormatBR = "dd/MM/yyyy";

  const parsedIso = parseISO(date);
  const formattDate = format(parsedIso, dateFormatBR, { locale: ptBR });

  return formattDate;
};
