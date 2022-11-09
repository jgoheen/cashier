function checkCashRegister(price, cash, cid) {
  
  let total = 0;
  let change = cash - price;
  let changeReturnArr = [];
  //cid = cid.reverse();

  console.log("change = " + change);
  const changeKey = [
    ["PENNY", .01],
    ["NICKEL", .05],
    ["DIME", .1],
    ["QUARTER", .25],
    ["ONE", 1.00],
    ["FIVE", 5.00],
    ["TEN", 10.00],
    ["TWENTY", 20.00],
    ["ONE HUNDRED", 100.00]
  ]

  let changeKeyReversed = changeKey.reverse();
  const object1 = {
    status: "",
    change: [],
  };

  object1.change = change;
  for (let i = 0 ; i < cid.length ; i++){
      total = total + cid[i][1];
  }
  if (total < change){
    object1.status = "INSUFFICIENT_FUNDS";
    object1.change = [];
    return object1;
  }
  else if (total.toFixed(2) == change){
    object1.status = "CLOSED";
    object1.change = cid;
    console.log(object1);
    return object1;
  }
  else{
    while (change > 0){
    for (let i = 0 ; i < cid.length ; i++) {
      console.log(changeKeyReversed[i][1]);
      if (change < changeKeyReversed[i][1]) {
        console.log("less than");
      }
      else {
        console.log("greater than");
      }
    }
  }
  console.log("total cid = " + total.toFixed(2));
}
}
