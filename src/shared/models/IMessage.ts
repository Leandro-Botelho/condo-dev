export interface IMessageParams {
  description: string;
  date: string;
  title: string;
  location: string;
}

export interface IMessageResponse extends IMessageParams {
  id: string;
}
