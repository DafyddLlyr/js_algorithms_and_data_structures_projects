// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let cidTotal = 0;
  cid.forEach(coinArray => cidTotal += coinArray[1])

  let coinValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  var change = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }

  if (cidTotal === changeDue) {
    change.status = "CLOSED";
    change.change = cid;
  } else if (cidTotal > changeDue) {
    change.status = "OPEN";
    for(let i = (cid.length - 1); i >= 0; i--) {
      let thisCoinValue = coinValues[(cid[i][0])];
      let firstCoin = true;
      while(changeDue.toFixed(2) >= thisCoinValue && cid[i][1] > 0) {
        cid[i][1] -= thisCoinValue;
        changeDue -= thisCoinValue;
        if (!firstCoin) {
          change.change[change.change.length - 1][1] += thisCoinValue;
        } else if(firstCoin) {
          firstCoin = false;
          change.change.push([cid[i][0], thisCoinValue]);
        }
      }
    }
  }

  let changeTotal = change.change.reduce((a, b) => a + b[1], 0)

  if (changeDue > changeTotal) {
    change = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }

  return change;

}
