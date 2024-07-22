import { API } from "@/core/networking/api";
import { IMessageResponse } from "@/shared/models/IMessage";

export const getMessageService = async (): Promise<IMessageResponse[]> => {
  const response = await API.get(`messages`);

  return response.data;
};
