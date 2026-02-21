function calculatePenalty(amount, dueDate){
    const today = new Date();
    const due = new Date(dueDate);

    if(today <= due) return 0;

    const monthsLate =
        (today.getFullYear() - due.getFullYear()) * 12 +
        (today.getMonth() - due.getMonth());

    return amount * 0.05 * monthsLate;
}