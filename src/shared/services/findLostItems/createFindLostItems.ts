import { API } from "@/core/networking/api";
import { IFindLostItemsParams } from "@/shared/models/IFindLostItems";

export const createFindLostItemsService = async (
  lostItem: IFindLostItemsParams,
) => {
  const response = await API.post(`find-items`, lostItem);

  return response.data;
};
