import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "../../components/LogIn/PlayerSlice";
import MonsterSlice from "../../components/MonsterRating/MonsterSlice";
export const store=configureStore
({
    reducer:{
      player:PlayerSlice,
      monster:MonsterSlice
    }
})
/**
 * unfortunately,redux doesn't have strict typing in their modules that you installed 
 * so we have to do some extra configuration to enforce TS behaviour (strict typing)
 * 
*/
export type AppDispatch =typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>