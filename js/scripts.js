//business logic
function BankAccount(name, money) {
  this.accName = name;
  this.balance = parseInt(money);
}
var deposit = 0;
var withdraw = 0;

// var totalChange = 0;
BankAccount.prototype.newBalance = function() {
  return this.balance += (deposit - withdraw);
}

// user interface logic
$(document).ready(function() {
  var newAccount;

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initDeposit = parseInt($("input#initDeposit").val());
    newAccount = new BankAccount(name, initDeposit);
    console.log(newAccount);
    $("input#name").val("");
    $("input#initDeposit").val("");
  });
  $("form#depositOrWithdraw").submit(function(event){
    event.preventDefault();
    deposit = parseInt($("input#deposit").val());
    withdraw = parseInt($("input#withdraw").val());

    $("#currentBalance").text("$"+newAccount.newBalance());

  });
});
