// Function to generate a unique transaction ID
function generateTransactionID() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let transactionID = '';
    for (let i = 0; i < 12; i++) {
        transactionID += chars[Math.floor(Math.random() * chars.length)];
    }
    return transactionID;
}

// Set the transaction ID when the page loads
document.getElementById('transaction-id').textContent = "Transaction ID: " + generateTransactionID();
