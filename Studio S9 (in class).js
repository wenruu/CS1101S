// S9 in class
// Q1
let tracker = list();
function count_pairs(x) {
    if (!is_pair(x) || !is_null(member(tracker, x))) {
        return 0;
    } else {
        tracker = append(list(x), tracker);
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
    }
}

// const my_list = list(1, 2, 3);
// set_head(tail(my_list), head(tail(tail(my_list))));
// count_pairs(my_list);