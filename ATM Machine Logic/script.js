const account = {
    name: "Ismail",
    pin: 1234,
    balance: 50000
};

let transactions = [];

const atm = (account, enteredPin, action, amount) => {

    // check pin condition
    if (enteredPin === account.pin) {

        if (action === "balance") {

            return account.balance;

        } else if (action === "deposit") {

            transactions.push(
                {
                    type: "Deposit",
                    amount: amount
                }
            )

            account.balance += amount;
            return `Remaining balance: ${account.balance}` ;

        } else if (action === "withdraw") {

            if (account.balance >= amount) {

                transactions.push(
                    {
                        type: "withdraw",
                        amount: amount
                    }
                )

                account.balance -= amount
                return `Remaining balance: ${account.balance}`;
            } else {
                return "Insufficient balance";
            }



        }


    } else {
        return "incorrect PIN";
    }





}

const accountDetails = atm(account, 1234, "withdraw", 10000);
console.log(accountDetails);

const getTransactionHistory = (transactions) =>{
    return transactions;
}

const transitonHistory = getTransactionHistory(transactions);
console.log(transitonHistory);
