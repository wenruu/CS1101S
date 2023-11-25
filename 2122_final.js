//Section A
//1.C 
//2.C
//3.B log(n^2) = 2logn = logn
//4.E
//5.C 2^logn ~~ n? //WRONG
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
//10. (x,y) => adjoin_rings(x,y), head(ns), ns //WRONG

//11. 1.Source 2.JavaScript 3.x86 4.x86 5.JavaScript 6.JavaScript 7.TypeScript
    //8.TypeScript 9.ARM8 10.ARM8 11.ARM8 12.ARM8 //REVISE TOMBSTONE //WRONG
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
    /* BETTER WAY:
    return accumulate((x,add) => x === 0 ? add : add(x), sumsum, L)(0);
    -> uses sumsum as intial, applies all numbers onto sumsum, then calls (0) 
        when done */
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
            /* MUCH MUCH MUCH BETTER IMPLEMENTATION:
            S[r][c] = M[r][c] + fill_SAT(r - 1, c) +
                                fill_SAT(r, c - 1) - fill_SAT(r - 1, c - 1);
            return S[r][c];
            ->  starts at bottom most entry and uses wishful thinking to fill in
                all the other holes recursively (recursive process)
            */
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
function fast_submatrix_sum(S, min_row, min_col, max_row, max_col) {
    function get_SAT_elem(r, c) {
        return (r < 0 || c < 0) ? 0 : S[r][c];
    }
    /* YOUR SOLUTION */
    return get_SAT_elem(max_row, max_col) 
           - get_SAT_elem(min_row - 1, max_col)
           - get_SAT_elem(max_row, min_col - 1) 
           + get_SAT_elem(min_row - 1, min_col - 1);
}
// const M = [[1, 2, 3, 4],
// [2, 3, 4, 5],
// [3, 4, 5, 6]];
// const S = make_sum_area_table(M);
// S is now [[1, 3, 6, 10],
// [3, 8, 15, 24],
// [6, 15, 27, 42]]
//fast_submatrix_sum(S, 1, 2, 1, 2); // returns 4
//fast_submatrix_sum(S, 0, 0, 2, 3); // returns 42
//fast_submatrix_sum(S, 1, 1, 2, 2); // returns 16
// fast_submatrix_sum(S, 0, 1, 2, 2); // returns 21

//18.
function hold_stream(xs) {
    return is_null(tail(xs)) ? pair(head(xs), () => hold_stream(xs))
                             : pair(head(xs), () => hold_stream(tail(xs)));
}
//testing
//eval_stream(hold_stream(enum_list(1, 5)), 7);

//19.
function search_stream(xs, pos, x) {
    return is_null(xs) || pos < 0
                       ? false
                       : head(xs) === x
                       ? true
                       : search_stream(stream_tail(xs), pos - 1, x);
}
//testing
// const ones = pair(1, () => ones);
// const integers = pair(1, () => stream_map(x => x + 1, integers));
// const finite_stream = enum_stream(1, 5);
//search_stream(ones, 0, 1); // returns true
//search_stream(ones, 0, 2); // returns false
//search_stream(integers, 4, 4); // returns true
// search_stream(integers, 4, 5); // returns true (corrected via announcement)
// search_stream(integers, 3, 5); // returns false
// search_stream(finite_stream, 6, 10); // returns false

//20.H //WRONG
//21.C //WRONG
//22.
const square = x => x * x;
const is_even = n => n % 2 === 0;
function fast_and_furious_expt(b, n) { //SEMI WRONG - does not cover 0 base case
    function ffe(bb, nn, cont) {
        /* YOUR SOLUTION */
        return nn === 1
               ? cont(bb)
               : is_even(nn)
               ? ffe(square(bb), nn / 2, cont) 
               : ffe(bb, nn - 1, x => cont(bb) * x);
        /* MODEL ANSWER:
        return nn === 0 //returns 1 if nn = 0
               ? cont(1) //applies accumulated cont operators to 1
               : is_even(nn)
               ? ffe(bb, nn / 2, x => cont(square(x)))
               : ffe(bb, nn - 1, x => cont(bb * x));
         -> makes use of fact that base case for b^0 is 1 and when nn is 1, 
            nn is odd thus you can apply bb * x to start with bb.
        */
    }
    return ffe(b, n, x => x);
}
//testing
//fast_and_furious_expt(4, 10);
