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
                if(xNumber === 3) {
                    winnerSymbol = 'X';
                    return winnerSymbol;
                }
            } else if(resultArray[WIN_COMBINATIONS[i][j]] === 'O') {
                oNumber++;
                if(oNumber === 3) {
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