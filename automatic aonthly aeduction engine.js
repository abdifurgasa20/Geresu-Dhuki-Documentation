const cron = require("node-cron");
const db = require("./config/db");

// Run every 1st day of month at 00:00
cron.schedule("0 0 1 * *", () => {

    db.query("SELECT id, monthly_saving FROM members WHERE role='member'", 
    (err, members) => {

        members.forEach(member => {

            // Add to savings balance
            db.query(
              "UPDATE members SET savings = savings + ? WHERE id=?",
              [member.monthly_saving, member.id]
            );

            // Record transaction in ledger
            db.query(
              "INSERT INTO transactions (member_id, type, amount) VALUES (?, ?, ?)",
              [member.id, "deposit", member.monthly_saving]
            );

        });

    });

});