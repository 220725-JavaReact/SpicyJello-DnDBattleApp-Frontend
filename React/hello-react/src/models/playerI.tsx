export interface IPlayer
{
    id:string,
    name:string,
    level:number,
    health:number,
    damage:number,
    totalbadge:number
    listofPlayer:IPlayer[]

}
export interface IPlay{
    sprite:{
        font_default:string
    }
}