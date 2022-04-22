import { useCallback } from "react";
import { generateGrid } from "../../helpers";

const Field = ({ handleCellClick, restartGame, ourState }) => {

    const handleClickCell = useCallback((i) => {
        handleCellClick(i);
    }, []);

    return (generateGrid(ourState.cells, handleClickCell, restartGame, ourState.winner))
}

export default Field;