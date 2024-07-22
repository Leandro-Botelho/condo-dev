export interface IServiceUserParams {
  title: string;
  date: string;
  status: boolean;
  description: string;
}

export interface IServiceUserResponse extends IServiceUserParams {
  id: string;
}
