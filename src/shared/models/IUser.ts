export interface IUsersParams {
  name: string;
  email: string;
  contact: string;
  condominium: string;
  apartment: string;
  town: string;
  created_at: string;
}

export interface IUserResponse extends IUsersParams {
  id: string;
}
