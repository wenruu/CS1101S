//1920 finals cs1101s
//1A.T  B.F  C.T  D.T
//2A.F  B.T  C.F  D.T WRONG - FFFT
//3A.T  B.T  C.T. D.T RIGHT
//4B.F  C.T  D.T. E.T  F.F F-T
//6A.
function tree_to_arraytree(xs) {
    if (is_number(xs)) {
        return xs;
    } else {
        const a = [];
        let i = 0;
        while (!is_null(xs)) {
            a[i] = tree_to_arraytree(head(xs));
            i = i + 1;
            xs = tail(xs);
        }
        return a;
    }
}
// tree_to_arraytree(list(list(10, 20, 30), list(30, 20, 10)));
// returns [[10, 20, 30], [30, 20, 10]]

//6B.
function arraytree_to_tree(a) {
    if (is_number(a)) {
        return a;
    } else {
        let xs = null;
        for (let i = array_length(a) - 1; i >= 0; i = i - 1) {
            xs = pair(arraytree_to_tree(a[i]), xs);
        }
        return xs;
    }
}
display_list(arraytree_to_tree([[10, 20, 30], [30, 20, 10]]));

//6C.
function array_permutations(a) {
    //return tree_to_arraytree(permutations(arraytree_to_tree(a)));
}

//8.
function perms01(n, m) {
    if (n === 0 && m === 0) {
        return list(null); //list(null) => map works
    } else {
        const p0 = n > 0
                 ? map(p => pair(0, p), perms01(n - 1, m))
                 : null; //null => map does not work
        const p1 = m > 0
                 ? map(p => pair(1, p), perms01(n, m - 1))
                 : null;
        return append(p0, p1);
    }
}
perms01(2, 3);