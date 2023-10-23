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

//Q3
