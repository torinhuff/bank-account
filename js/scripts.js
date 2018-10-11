$(document).ready(function(){
  function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  };
  /*Account.prototype.adjust(function(adjustment) {
    var newDeposit = Account.balance + adjustment;
    var newWithdrawal = Account.balance - adjustment;
    var newAdjustment = newDeposit + newWithdrawal;
    ret
  });*/

  Account.prototype.adjust = function(adjustment) {
    this.balance = this.balance + adjustment;
  };

  $("button#makeaccount").click(function(){
    $("form#new-account").submit(function(event){
      event.preventDefault();
    });
    var name = $("#new-name").val();
    var initialDeposit = parseFloat($("#initial-deposit").val());
    newAccount = new Account(name, initialDeposit);
    $("#your-account").show();
    $("#account-name").text(newAccount.name + "'s ");
    $("#account-balance").text("$" + newAccount.balance);
  });
  $("button#submit").click(function(){
    $("form#new-account").submit(function(event){
      event.preventDefault();
    });
    var deposit = parseFloat($("#deposit").val());
    var withdrawal = parseFloat($("#withdrawal").val());
    var finalAdjustment = deposit - withdrawal;
    console.log(finalAdjustment);
    newAccount.adjust(finalAdjustment);
    $("#account-balance").text("$" + newAccount.balance);
  });
});
