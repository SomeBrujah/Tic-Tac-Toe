import Cell from "./components/Cell/Cell";
import React from "react";

const WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const testArr = [
    'X', '0', 'X',
    'O', 'O', 'X',
    'X', 'X', 'X'
]

export function calculateWinerComb(resultArray) {
    let winnerSymbol = '';
    for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
        let xNumber = 0;
        let oNumber = 0;
        for (let j = 0; j < WIN_COMBINATIONS[i].length; j++) {
            if (resultArray[WIN_COMBINATIONS[i][j]] === 'X') {
                xNumber++;
                if (xNumber === 3) {
                    winnerSymbol = 'X';
                    return winnerSymbol;
                }
            } else if (resultArray[WIN_COMBINATIONS[i][j]] === 'O') {
                oNumber++;
                if (oNumber === 3) {
                    winnerSymbol = 'O';
                    return winnerSymbol;
                }
            } else {
                continue;
            }
        }
    }
    return null;
}

export function generateGrid(cellsArr, onClickFunc, restartFunc, winner) {
    const rows = [];
    const cells = [];

    for (let i = 0; i < 9; i++) {
        cells.push(<Cell key={i.toString()} value={cellsArr[i]} className="cell" onClick={() => { onClickFunc(i) }} />);
    }

    for (let j = 0; j < 3; j++) {
        const cellsCollection = [];
        for (let k = 0; k < 3; k++) {
            cellsCollection.push(cells.shift());
        }
        rows.push(<div key={j.toString(2)} className="row">{cellsCollection}</div>);
    }
    rows.push(<h1 className="gameResultText" key={'caseForWinnerValue'}>{winner}</h1>)
    rows.push(<button className="restartButton" key={'keyButtonForRestart'} onClick={restartFunc}>Restart</button>)
    return <div className="gameField">{rows}</div>;
}