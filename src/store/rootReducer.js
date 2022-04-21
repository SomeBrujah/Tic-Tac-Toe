import { calculateWinerComb } from "../helpers";
import { HANDLE_CELL_CLICK, RESTART_GAME } from "./types";

const defaultState = {
    cells: new Array(9).fill(null),
    isX: true,
    winner: null
}

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case HANDLE_CELL_CLICK:
            const newState = {
                cells: state.cells,
                isX: state.isX,
                winner: state.winner
            }
            if (newState.winner !== null || newState.cells[action.payload] !== null) {
                return state;
            }
            newState.cells[action.payload] = newState.isX ? 'X' : 'O';
            newState.isX = !newState.isX;
            let result = calculateWinerComb(newState.cells);
            if (result === null && !newState.cells.includes(null)) {
                newState.winner = 'Draw';
            } else if (result !== null) {
                newState.winner = `Winner is: ${result}`;
            }
            return {
                ...state,
                cells: newState.cells,
                isX: newState.isX,
                winner: newState.winner
            };

        case RESTART_GAME:
            return {
                ...state,
                cells: state.cells = new Array(9).fill(null),
                isX: state.isX = true,
                winner: state.winner = null
            }

        default:
            return state;
    }
}