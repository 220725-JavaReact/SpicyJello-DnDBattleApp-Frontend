import { IGame } from "./Game";

export interface IMonster {
    id: number,
    game: IGame,
    source: string,
    modifier: string
}

export interface IAPIMonster {
    name: string,
    armor_class: number,
    hit_points: number,
    xp: number,
    actions: IMonsterAction[],
    url: string
}

export interface IMonsterAction {
    name: string,
    attack_bonus: number,
    damage: IMonsterDamage
}

export interface IMonsterDamage {
    damage_dice: string
}

export interface IMonsterResults {
    count: number,
    results: IMonsterResult[]
}

export interface IMonsterResult {
    name: string,
    url: string
}