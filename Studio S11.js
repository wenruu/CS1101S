//S11 studio sheet
//Q1. A describes a stream containing increasing exponentials of 2
// B describes a stream containing factorials from 1!
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