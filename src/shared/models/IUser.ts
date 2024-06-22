export interface IUsersParams {
  name: string;
  email: string;
  contact: string;
  condominium: string;
  apartment: string;
  town: string;
}

export interface IUserResponse extends IUsersParams {
  id: string;
}
