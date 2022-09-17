import { IUser } from "./User";

export interface IWeapon {
    id?: number,
    name: string,
    category: string,
    base_damage: string,
    users: IUser[]
}