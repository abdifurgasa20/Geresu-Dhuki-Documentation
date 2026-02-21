router.put("/approve/:id",
authenticateToken,
authorizeRole("admin"),
(req,res)=>{
    const loanId = req.params.id;

    db.query(
        "UPDATE loans SET status='approved' WHERE id=?",
        [loanId],
        (err)=>{
            if(err) return res.status(500).json(err);
            res.json({message:"Loan approved"});
        }
    );
});