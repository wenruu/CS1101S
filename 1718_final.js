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
function differences(tn1, tn2) { //both are similar trees, no need to do this:
    return is_null(tn1) && is_null(tn2) ? 0 //checking for one is_null is enough
           : is_number(tn1) && is_number(tn2) //same, check for one is_num
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

//3A.
function array_with_zeroes(n) {
    let result = [];
    for (let i = 0; i < n; i = i + 1) {
        result[i] = 0;
    }
    return result;
}
//array_with_zeroes(5);

//3B.
function make_histogram(arr, max) {
    let result = array_with_zeroes(max + 1);
    for (let i = 0; i < array_length(arr); i = i + 1) {
        result[arr[i]] = result[arr[i]] + 1;
    }
    return result;
}
//testing:
// let unsorted = [5, 1, 10, 2, 1, 5, 7, 3];
// let max = 12;
// make_histogram(unsorted, max);

//3C. 
function enter_copies(arr, n, v, start) {
    let temp = start;
    for (temp; temp < start + n; temp = temp + 1) {
        arr[temp] = v;
    }
    return arr;
}
// let some_array = [1, 1, 1, 1, 1, 1, 1, 1, 1];
// enter_copies(some_array, 4, 8, 2);

//3D.
function generate_sorted(arr) {
    let curr = 0;
    let result = [];
    for (let i = 0; i < array_length(arr); i = i + 1) {
        if (arr[i] === 0) {
            continue;
        } else {
            enter_copies(result, arr[i], i, curr);
            curr = curr + arr[i];
        }
    }
    return result;
}
//testing
// generate_sorted([0, 2, 1, 1, 0, 2, 0, 1, 0, 0, 1, 0, 0]);

//3E.
// n.

//5A.
function evaluate(component, env) {
    return is_lambda_expression(component) 
           ? ()
}
//not relevant?
//5C1. 4
//5C2. 6
//5C3. error - undeclared x.













