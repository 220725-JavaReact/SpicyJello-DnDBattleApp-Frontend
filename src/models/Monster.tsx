import { IGame } from "./Game";

export interface IMonster {
    id: number,
    game: IGame,
    source: string,
    modifier: string
}