//2021 finals
//1. A 
//2. A WRONG - B 
//3. B
//4. 
function accumulate_iter(f, init, xs) {
/* YOUR SOLUTION */
    let acc = init;
    for (let i = length(xs) - 1; i >= 0; i = i - 1) {
        acc = f(list_ref(xs, i), acc);
    }
    return acc;
}

//5. E
//6. A
//7. 
function hoopify(xs) {
/* YOUR SOLUTION */
    // let temp = xs; USE COPY AND LAST PAIR
    // while (!is_null(tail(temp))) {
    //     temp = tail(temp);
    // }
    // set_tail(temp, xs);
    // return xs;
}
//8.

function copy(xs) {
    return map(x => x, xs);
}
function last_pair(xs) {
    return is_null(tail(xs))
        ? xs
        : last_pair(tail(xs));
}
function list_pair(xs, m) {
    return m === 0
           ? xs
           : list_pair(tail(xs), m - 1);
}
function partially_hoopify(xs, m) {
/* YOUR SOLUTION */
    let temp = copy(xs);
    let pointer = temp;
    for (m; m > 0; m = m - 1) {
        pointer = tail(pointer);
    }

    let lp = last_pair(temp);
    set_tail(lp, pointer);
    return temp;
}
const p = partially_hoopify(list(1, 2, 3, 4, 5), 2);
draw_data(p);
//9. ???? how to point tail to itself?
const hh1 = pair(undefined, undefined);
const hh2 = pair(undefined, undefined);
const hh3 = pair(undefined, undefined);
/* YOUR SOLUTION */
set_head(hh1, hh1);
set_tail(hh1, hh1);
const hh2_temp = pair(undefined, hh2);
set_head(hh2_temp, hh2_temp);
set_head(hh2, hh2_temp);
set_tail(hh2, hh2);
const hh3_temp = pair(hh3, hh3);
set_head(hh3, hh3_temp);
set_tail(hh3, hh3_temp);

//10.
function is_hula_hoop(x) {
    return (!is_pair(x) || is_list(x)) 
           ? false
           : tail(x) === x && head(x) === x;
           
}

is_hula_hoop(hh2);

//11.
function identity(n) {
/* YOUR SOLUTION */
    let arr = [];
    for (let i = 0; i < n; i = i + 1) {
        for (let j = 0; j < n; j = j + 1) {
            if (is_undefined(arr[i])) {
                arr[i] = [];
            }
            if (i === j) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}

//12.
function zip_array(arr1, arr2) {
/* YOUR SOLUTION */
    let arr = [];
    for (let i = 0; i < 2*array_length(arr1); i = i + 1) {
        if (i % 2 === 0) {
            arr[i] = arr1[i / 2];
        } else {
            arr[i] = arr2[math_floor(i / 2)];
        }
    }
    return arr;
}

//13.
function unzip_array(arr) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < array_length(arr); i = i + 1) {
        if (i % 2 === 0) {
            arr1[i / 2] = arr[i];
        } else {
            arr2[math_floor(i / 2)] = arr[i];
        }
    }
    return pair(arr1, arr2);
}

//14. 
function scream_ref(s, n) {
    function helper(s, i, k) {
        return k === 0
               ? head(s)
               : helper(tail(s)(s, i + 1), i + 1, k - 1);
    }
    return helper(s, 0, n);
}

const factorials =
pair(1, (s, i) => pair(i * head(s), tail(factorials)));
// fill the following line, only using the names
// pair, head, tail, factorials, s, i
/* YOUR SOLUTION */

//15.
const pi_square_series =
pair(0, (s, i) => pair(head(s) + 6 / math_pow(i, 2), tail(pi_square_series)));
// fill the following line, only using the names
// pair, head, tail, pi_square_series, s, i
/* YOUR SOLUTION */
//scream_ref(pi_square_series, 2); // returns 6

//16. ???
const fibonacci =
    pair(0,
        (s1, ignore) =>
            pair(1,
                (s2, ignore) =>
                    pair(head(s1) + head(s2),
                        (s3, ignore) =>
                            tail(s3)
// fill the following line,
// only using the names
// tail, s1, s2, s3
/* YOUR SOLUTION */
                        )   
                )
        );
//scream_ref(fibonacci, 7); // returns 13

