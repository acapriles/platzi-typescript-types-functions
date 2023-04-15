import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = "admin",
  USER = "seller",
  OWNER = "customer",
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
