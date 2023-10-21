// Q1
function make_optimized_search(A){
    return x => {
        const len = array_length(A);
        let i = 0;
        for(i = 0; i < len; i = i + 1) {
            if (A[i] === x) {
                break;
            }
        }
        return i < len;
    };
}

const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2]; 
const my_search = make_optimized_search(my_array); 
my_search(14); // returns true
my_search(30); // returns false

//Q2a
function fib(n) {
    const mem = [0, 1];
    return mem[n] !== undefined ? mem[n] 
                  : fib(n - 1) + fib(n - 2);
}
fib(6);

//2b
function fib_1(n) {
    let fib1 = 0;
    let fib2 = 1;
    if (n <= 1) {
        return n;
    }
    let i = 2;
    for (i = 2; i <= n; i = i + 1) { 
        fib2 = fib1 + fib2;
        fib1 = fib2 - fib1;
    }
    return fib2;

}
fib_1(5);

//3 O(n^2), O(n^2);

