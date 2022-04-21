import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateGrid } from "../../helpers";
import { restartGame, handleCellClick } from "../../store/actions";

const Field = () => {

    const dispatch = useDispatch();
    const { cells, winner } = useSelector(state => state);

    const restartFunc = useCallback(()=>{
        dispatch(restartGame());
    }, []);
    
    const handleClickCell = useCallback((i)=>{
        dispatch(handleCellClick(i));
    }, []);

    return (generateGrid(cells, handleClickCell, restartFunc, winner))
}

export default Field;