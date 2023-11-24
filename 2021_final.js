//Section A
//1.C 
//2.C
//3.B log(n^2) = 2logn = logn
//4.E
//5.C 2^logn ~~ n?
//6.
function remove_elem(L, pos) {
    return pos === 0 ? tail(L) : pair(head(L), remove_elem(tail(L), pos - 1));
}
//testing
// const L = list(10, 11, 12, 13);
// const R = remove_elem(L, 2);
// R; // equals list(10, 11, 13)
// L; // equals list(10, 11, 12, 13)

//7.
function d_remove_elem(L, pos) {
    if (pos === 0) {
        return tail(L);
    } else {
        /* YOUR SOLUTION */
        set_tail(L, d_remove_elem(tail(L), pos - 1));
        return L;
    }
}
//testing
// const L = list(10, 11, 12, 13);
// let R = d_remove_elem(L, 2);
// R; // equals list(10, 11, 13)
// L; // equals list(10, 11, 13)
// R = d_remove_elem(L, 0);
// R; // equals list(11, 13)
// L; // equals list(10, 11, 13)
//8.F
//9.A
//10. (x,y) => adjoin_rings(x,y), head(ns), ns

//11. 1.Source 2.JavaScript 3.x86 4.x86 5.JavaScript 6.JavaScript 7.TypeScript
    //8.TypeScript 9.ARM8 10.ARM8 11.ARM8 12.ARM8
//12. 
function until_zero(x) {
    return x === 0 ? "Hello" : until_zero;
}

//13.
function sumsum(x) {
/* YOUR SOLUTION */
    let result = 0;
    function helper(n) {
        result = result + n;
        return n === 0 ? result : helper;
    }
    return helper(x);
}
//testing
//sumsum(2)(3)(1)(5)(4)(100)(2)(1)(0); returns 118

//14.
function sum_list(L) {
    return accumulate(((x, y) => x === 0 ? y : y === 0 ? sumsum(x)(0) 
                                         : sumsum(x)(y)(0)), 0, L);
}
//testing
// const L = list(10, 0, 20, 0, 0, 30, 40);
// sum_list(L); // returns 100

//15.
function submatrix_sum(M, min_row, min_col, max_row, max_col) {
    /* YOUR SOLUTION */
    let sum = 0;
    for (min_row; min_row <= max_row; min_row = min_row + 1) {
        for (let j = min_col; j <= max_col; j = j + 1) {
            sum = sum + M[min_row][j];
        }
    }
    return sum;
}
//testing
// const M = [[1, 2, 3, 4],
// [2, 3, 4, 5],
// [3, 4, 5, 6]];
// submatrix_sum(M, 1, 2, 1, 2); // returns 4
// submatrix_sum(M, 0, 0, 2, 3); // returns 42

//16.
function make_sum_area_table(M) {
    const ROWS = array_length(M);
    const COLS = array_length(M[0]);
    const S = []; // the sum area table
    for (let r = 0; r < ROWS; r = r + 1) { S[r] = []; }
    function fill_SAT(r, c) {
        if (r < 0 || c < 0) {
            return 0;
        } else if (S[r][c] !== undefined) {
            return S[r][c];
        } else {
            /* YOUR SOLUTION */
            for (let i = 0; i <= r; i = i + 1) {
                for(let j = 0; j <= c; j = j + 1) {
                    S[i][j] = fill_SAT(i, j - 1) + M[i][j];
                    for(let k = 0; k < i; k = k + 1) {
                        S[i][j] = M[k][j] + S[i][j];
                    }
                }
            }
        }
    }
    fill_SAT(ROWS - 1, COLS - 1);
    return S;
}
//testing
// const M = [[1, 2, 3, 4],
// [2, 3, 4, 5],
// [3, 4, 5, 6]];
// make_sum_area_table(M);

//17.

