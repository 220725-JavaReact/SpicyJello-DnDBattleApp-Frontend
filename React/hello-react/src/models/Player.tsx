
export interface IPlayer
{   id?:number,
    name:string,
    email:string,
    username:string,
    password:string,
    health:number,
    gold:number,
    listofPlayer?:IPlayer[]
    
}