//S11 studio sheet
//Q1. A describes a stream containing increasing exponentials of 2
// B describes a stream containing factorials from 0!
// kill me now :D
//Q2. 
function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
            () => add_streams(stream_tail(s1),
            stream_tail(s2)));
}

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

const add_series = add_streams;
const scale_series = scale_stream;
function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

function coeffs_to_series(list_of_coeffs) {
    const zeros = pair(0, () => zeros);
    function iter(list) {
        return is_null(list)
            ? zeros
            : pair(head(list),
                () => iter(tail(list)));    
    }
    return iter(list_of_coeffs);
}
const ones_stream = pair(1, () => ones_stream);
const non_neg_integers = pair(0, () => add_streams(ones_stream, non_neg_integers));
function fun_to_series(fun) {
    return stream_map(fun, non_neg_integers);
}
// S1:
const S1 = fun_to_series(x => 1);
// S2:
const S2 =

//inclass
//1a. stream of pairs (1,2), (1,3), (1,4), (1,5), (2,3), (2,4), (2,5), (3,4), (3,5), (4,5), 5
//1b. stream_pairs pairs the first element with every element in the stream until 
// it reaches the end and then continues with the next element in the list
//1c. infinite loop because the stream_append does not resolve.
//1d. returns ys() instead of ys when xs is null, 
//1e. returns an infinite stream of (1,2), (1,3), (1,4) ... (1, infinity)
//use zip_stream(interleaving) instead. 
