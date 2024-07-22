export interface IFindLostItemsParams {
  title: string;
  location: string;
  nameFind: string;
  contact: string;
  description: string;
}

export interface IFindLostItemsResponse extends IFindLostItemsParams {
  id: string;
}
