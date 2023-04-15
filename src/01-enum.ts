export enum ROLES {
  ADMIN = "admin",
  USER = "user",
  OWNER = "owner",
}

export type User = {
  username: string;
  role: ROLES;
}

const user: User = {
  username: 'acapriles',
  role: ROLES.OWNER
}
