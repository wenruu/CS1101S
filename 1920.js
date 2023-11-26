//1920 finals cs1101s
//1A.T  B.F  C.T  D.T
//2A.F  B.T  C.F  D.T
//3A.T  B.T  C.T. D.T
//4B.F  C.T  D.T. E.T  F.F
//6A.
function tree_to_arraytree(xs) {
    function helper(ys) {
        if (is_null(tail(ys))) {
            return [tree_to_arraytree(head(ys))];
        }
        if (is_list(head(ys))) {
            return [tree_to_arraytree(head(ys)), tree_to_arraytree(list_ref(ys, 1))];
        } else {
            let temp = [];
            for (let i = 0; i < length(ys); i = i + 1) {
                temp[i] = list_ref(ys, i);
            }
            return temp;
        }
    }
    return helper(xs);
}
// tree_to_arraytree(list(list(10, 20, 30), list(30, 20, 10)));
// returns [[10, 20, 30], [30, 20, 10]]

//6B.
function arraytree_to_tree(a) {
    if (is_array(a[0])) {
        return list(arraytree_to_tree(a[0]), arraytree_to_tree(a[1]));
    } else {
        let temp = null;
        for (let i = 0; !is_undefined(a[i]); i = i + 1) {
            temp = pair(a[i], temp);
        }
        return reverse(temp);
    }
}
// display_list(arraytree_to_tree([[10, 20, 30], [30, 20, 10]]));

//6C.
function array_permutations(a) {
    function choose(n, arr) {
        if (is_undefined(arr[n])) {
            return arr;
        } else {
            for (n; n <= array_length(arr); n = n + 1) {
                arr[n] = arr[n + 1];
            }
        }
        return arr;
    }
    
}

//8.
function perms01(n, m) {
    if (n === 0) {
        let temp = null;
        for (m; m > 0; m = m - 1) {
            temp = pair(1, temp);
        }
        return temp;
    } else if (m === 0) {
        let temp = null;
        for (n; n > 0; n = n - 1) {
            temp = pair(0, temp);
        }
        return temp;
    } else {
        const a = pair(0, perms01(n - 1, m));
        const b = pair(1, perms01(n, m - 1));
        return list(a, b);
    }
}
perms01(1,2);