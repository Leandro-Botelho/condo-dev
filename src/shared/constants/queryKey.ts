interface IQueryKey {
  user: string;
  service: string;
  message: string;
  find: string;
}

export const QUERY_KEYS: IQueryKey = {
  find: "findAndLost",
  message: "messages",
  service: "services",
  user: "users",
};
