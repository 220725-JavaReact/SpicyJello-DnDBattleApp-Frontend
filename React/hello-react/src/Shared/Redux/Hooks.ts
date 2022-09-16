/**
 * unfortunately, redux doesn't fully support TS all the way
 * so , we have to create our own hooks and addd strict type to it
 * 
 */

import{useDispatch} from "react-redux"
import{AppDispatch,RootState}from "./store";

export const useAppDispatch () => AppDispatch =useDispatch;
export const useAppSelector:TypeduseSelectorHook<RootState> =useAppDispatch;
