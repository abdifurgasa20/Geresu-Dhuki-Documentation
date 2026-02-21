db.query(
  "UPDATE loans SET status='approved' WHERE id=?",
  [loanId],
  (err) => {
    if(err) return res.status(500).json(err);

    // Insert audit log
    db.query(
      "INSERT INTO audit_logs (admin_id, action, target_id) VALUES (?, ?, ?)",
      [req.user.id, "Approved Loan", loanId]
    );

    res.json({message:"Loan approved and logged"});
  }
);