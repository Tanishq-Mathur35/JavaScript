let accountBalance = 1000; // Using let for a variable that may change
const accountName = "Savings Account"; // Using const for a variable that won't change
var accountPassword = "secure123"; // Using var (not recommended in modern JS)
let accountId;

console.table({ accountName, accountBalance, accountPassword, accountId });

// Trying to reassign values
accountBalance += 500; // This is allowed
// accountName = "New Account Name"; // This will throw an error
accountPassword = "newpassword456"; // This is allowed

