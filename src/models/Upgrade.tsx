import { IUser } from "./User";

export interface IUpgrade {
    id: number,
    name: string,
    description: string,
    effect: string,
    users: IUser[]
}