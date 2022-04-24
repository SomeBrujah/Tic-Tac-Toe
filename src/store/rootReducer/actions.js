import { HANDLE_CELL_CLICK, RESTART_GAME } from "./types";
import {createAction} from 'redux-actions'

export const handleCellClick = createAction(HANDLE_CELL_CLICK, (index)=>{
    return {
        payload: index
    }
});

export const restartGame = createAction(RESTART_GAME);