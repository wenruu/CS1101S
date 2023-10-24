//2a
// O(n^2) bc n + (n - 1) + (n - 2) + ... + 2 + 1 ~= n^2
//2b 
function bubblesort_list(L) {
    // Your solution here.
    let count = 0;
    function helper(L) {
        if (!is_null(L) && !is_null(tail(L))) {
            if (head(tail(L)) < head(L)) {
                let temp = head(L);
                set_head(L, head(tail(L)));
                set_head(tail(L), temp);
                count = count + 1;
                return helper(tail(L));
            }
            return helper(tail(L));
        }
    }
    helper(L);
    if (count > 0) {
        return bubblesort_list(L);
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]

//Q3a
// yes b/c same as n choose k

//Q3b
function mcc(n, k) {
    // Your solution here.
    if (n < 0 || k === 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const val = mcc(n, k - 1) + mcc(n - first_denomination(k),
                                        k);
        write(n, k, val);
        return val;
    }
}

//Q3c
//n, n?
