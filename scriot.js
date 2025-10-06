 let accountBalance = 1000;
        let cashBalance = 1000;

        function updateOutput() {
            const box = document.getElementById("outputBox");
            box.value += `\nCurrent account balance: ${accountBalance}, Current cash balance: ${cashBalance}`;
            box.scrollTop = box.scrollHeight;
        }

        function updateBalance() {
            accountBalance = parseFloat(document.getElementById("current-account").value);
            cashBalance = parseFloat(document.getElementById("current-cash").value);
            updateOutput();
        }

        function processOperation() {
            const type = document.getElementById("operation").value;
            const amount = parseFloat(document.getElementById("amount").value);
            
            if (isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount!");
                return;
            }

            if (type === "deposit") {
                if (cashBalance >= amount) {
                    cashBalance -= amount;
                    accountBalance += amount;
                } else {
                    alert("Not enough cash to deposit!");
                }
            } else if (type === "withdraw") {
                if (accountBalance >= amount) {
                    accountBalance -= amount;
                    cashBalance += amount;
                } else {
                    alert("Not enough balance to withdraw!");
                }
            }

            document.getElementById("current-account").value = accountBalance;
            document.getElementById("current-cash").value = cashBalance;
            updateOutput();
        }