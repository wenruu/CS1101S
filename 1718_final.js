//1B:
function similar(tn1, tn2) {
    return is_null(tn1) && is_null(tn2)
           ? true
           : is_number(tn1) && is_number(tn2)
           ? math_abs(tn1 - tn2) <= 1
           : is_null(tn1) || is_null(tn2)
           ? false
           : is_list(tn1) && is_list(tn2)
           ? similar(head(tn1), head(tn2)) && similar(tail(tn1), tail(tn2))
           : false;
}
//testing:
// similar(list(4, list(5,6)), 
//         list(4,null,list(5,6))); // false (not same structure)
// similar(list(4, null, list(5,6)),
//         list(5, null, list(4,7))); // true
// similar(list(4, list(5,6)),
//         list(5, list(3,7))); // false (too big difference)

//1C.
function differences(tn1, tn2) {
    return is_null(tn1) && is_null(tn2) ? 0
           : is_number(tn1) && is_number(tn2)
           ? (tn1 === tn2 ? 0 : 1)
           : is_list(tn1) && is_list(tn2)
           ? differences(head(tn1), head(tn2)) +
                differences(tail(tn1), tail(tn2))
           : 1;
}
//testing:
// differences(list(4, null, list(4,6), 8),
// list(5, null, list(4,7), 8)); // returns 2
// differences(list(4,5,6,7),
// list(4,5,6,7)); // returns 0

//1D.
function map_tree(f, tree) {
    return map(sub_tree => ! is_list(sub_tree)
                           ? f(sub_tree)
                           : map_tree(f, sub_tree),
               tree
               );
}
function increment(tn) {
    return map_tree(x => x + 1, tn);
}
//increment(list(4, null, list(4,6), 8));














