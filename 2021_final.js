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

//9.

