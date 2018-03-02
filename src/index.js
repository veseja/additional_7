module.exports = function solveSudoku(matrix) {

    if (solveOne()) return matrix;

    function solveOne() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (matrix[i][j] == 0) {
                    for (var n = 0; n < 9; n++) {
                        if (tryPossibility(i, j, n+1) == true) {
                            matrix[i][j] = n+1;
                            if (solveOne() == true) return true;
                            matrix[i][j] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    function tryPossibility(i, j, n) {
        for (var k = 0; k < 9; k++) {
            if (matrix[i][k] == n) return false;
        }
        for (var k = 0; k < 9; k++) {
            if (matrix[k][j] == n) return false;
        }
        for (t = 0; t < 3; t++) {
            for (u = 0; u < 3; u++) {
                if (matrix[i - i % 3 + t][j - j % 3 + u] == n) return false;
            }
        }
        return true;

    }

}