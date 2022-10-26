$(function() {
    consoleInit(main)
  });

  async function main() {
    printCantoData("This is the INFO so far")
  }

async function printCantoData(data){
    // _print_bold(`${data.uSymbol} ($${formatMoney(data.underlyingPrice)})`);
    // _print(`Supplied : ${formatMoney(data.aTotalSupply)} ($${formatMoney(data.aTotalSupply * data.underlyingPrice)}) at ${data.supplyRate.toFixed(2)}% APR`)
    // _print(`Borrowed : ${formatMoney(data.bTotalSupply)} ($${formatMoney(data.bTotalSupply * data.underlyingPrice)}) at ${data.borrowRate.toFixed(2)}% APR`)
    // _print(`Reserves : ${formatMoney(data.uReserves)} ($${formatMoney(data.uReserves * data.underlyingPrice)})`);
    // _print(`Farming APR Supply ${data.yearlySupplyAPR.toFixed(2)}% Borrow ${data.yearlyBorrowAPR.toFixed(2)}%`);
    // _print(`Net APR Supply ${data.supplyNetAPR.toFixed(2)}% Borrow ${data.borrowNetAPR.toFixed(2)}%`);
    // if(data.aBalanceOf > 0){
    //   _print(`You are supplying ${formatMoney(data.aBalanceOf)} ${data.uSymbol} ($${formatMoney(data.aBalanceOf * data.underlyingPrice)}), ${(data.aPct).toFixed(2)}% of the pool.`)
    //   _print(`Estimated Supply earnings: Day ($${formatMoney(data.aUsdPerDay)}) Week ($${formatMoney(data.aUsdPerWeek)}) Year: ($${formatMoney(data.aUsdPerYear)})`);
    // }
    // if(data.bBalanceOf > 0){
    //   _print(`You are borrowing ${formatMoney(data.bBalanceOf)} ${data.uSymbol} ($${formatMoney(data.bBalanceOf * data.underlyingPrice)}), ${(data.bPct).toFixed(2)}% of the pool.`)
    //   _print(`Estimated Borrow earnings: Day ($${formatMoney(data.bUsdPerDay)}) Week ($${formatMoney(data.bUsdPerWeek)}) Year: ($${formatMoney(data.bUsdPerYear)})`);
    // }
    // _print("");
    _print(data)
  }