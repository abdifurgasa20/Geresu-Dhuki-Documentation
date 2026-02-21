db.query(
  "INSERT INTO transactions (member_id, type, amount, reference_id) VALUES (?, ?, ?, ?)",
  [memberId, "penalty", penaltyAmount, loanId]
);