// PLEASE DON'T change function name
//makeExchange(49);
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coints = {};
    let bank = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };

    if (currency > 10000 ) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    
    for (let nominal in bank) {
        if (bank[nominal] > currency) continue;
        coints[nominal] = Math.floor( currency / bank[nominal]);
        currency = currency - coints[nominal] * bank[nominal];
    }
    
    return coints;
}
