import { IMonster } from "./Monster";

export interface IGame {
    id?: number,
    user: {
        id: number
    },
    score: number,
    gold: number,
    monsters: IMonster[]
}