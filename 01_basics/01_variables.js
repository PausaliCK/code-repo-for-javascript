const accountId = 144553
let accountEmail = "pausali@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate;

//  accountId = 2 // not allowed

console.log(accountId);


/*
  Prefer not to use var 
  because of issue in block scope and functional scope
*/


accountEmail = "ps@ps.com"
accountPassword = "21212121"
accountCity="Bengaluru"

console.table([accountId, accountEmail , accountPassword, accountCity, accountstate])