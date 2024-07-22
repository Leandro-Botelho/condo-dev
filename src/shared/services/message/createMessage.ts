import { API } from "@/core/networking/api";
import { IMessageParams } from "@/shared/models/IMessage";

export const createMessage = async (message: IMessageParams) => {
  const response = await API.post(`messages`, message);

  return response.data;
};
