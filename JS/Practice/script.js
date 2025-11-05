let Balance=1000;
let withdrawals=3;
while(withdrawals>0){
    let amount = prompt("How much money to withdraw?");
    Balance-=amount;
    if(Balance>0){
        alert(`Deducted, Remaining Balance ${Balance}`)
    }
    else{
        alert(`Insufficient Balance: ${Balance}`)
    }
    withdrawals--;
}