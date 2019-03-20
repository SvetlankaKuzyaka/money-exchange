// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var coins = {"H":50, "Q":25, "D":10, "N":5, "P":1};
    var buf_obj = {};
    var buf_cur = currency;
    for (key in coins) {
      var buf = Math.floor(buf_cur/coins[key]);
      if (buf != 0) buf_obj[key] = buf;
      buf_cur = buf_cur % coins[key];
    }
    return buf_obj;
}
