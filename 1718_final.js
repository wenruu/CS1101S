function differences(tn1, tn2) {
    return is_null(tn1) && is_null(tn2) ? 0
           : is_number(tn1) && is_number(tn2)
           ? (tn1 === tn2 ? 0 : 1)
           : is_list(tn1) && is_list(tn2)
           ? differences(head(tn1), head(tn2)) +
                differences(tail(tn1), tail(tn2))
           : 1;
}

