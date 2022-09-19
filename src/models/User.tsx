import { IGame } from "./Game"
import { IUpgrade } from "./Upgrade"
import { IWeapon } from "./Weapon"

export interface IUser {
    id: number,
    name: string,
    email: string,
    username: string,
    password: string,
    gold: number
}

export interface ILoginInfo {
    username: string,
    password: string
}