import { HANDLE_CELL_CLICK, RESTART_GAME } from "./types"

export const handleCellClick = (index) => {
    return {
        type: HANDLE_CELL_CLICK,
        payload: index
    }
}

export const restartGame = () => {
    return {
        type: RESTART_GAME
    }
}