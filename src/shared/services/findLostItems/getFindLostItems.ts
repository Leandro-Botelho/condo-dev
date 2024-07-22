import { API } from "@/core/networking/api";
import { IFindLostItemsResponse } from "@/shared/models/IFindLostItems";

export const getFindLostItemsService =
  async (): Promise<IFindLostItemsResponse> => {
    const response = await API.get(`find-items`);

    return response.data;
  };
