import { IMonster } from "./Monster";
import { IUser } from "./User";

export interface IGame {
    id: number,
    user: IUser,
    score: number,
    gold: number,
    monsters: IMonster[]
}