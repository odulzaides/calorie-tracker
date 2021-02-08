export function dashboardData(data) {
    console.log(data);
    // 3 day calorie balance
    let calBal = [];
    let weight = [];
    let hrv = [];
    // DOM elements
    let threeDayCalorieBal = $('#3-day-calorie-balance');
    let sevenDayCalorieBal = $('#7-day-calorie-balance');
    let thirtyDayCalorieBal = $('#30-day-calorie-balance');
    let dailyWeight = $('#daily-weight');
    let oneDayFlux = $('#1-Day-Flux');
    let thirtyDayAvg = $('#30-day-avg');
    let dailyHrv = $('#daily-hrv');
    let sevenDayHrv = $('#7-day-hrv');

    // set up arrays for calculations
    data.forEach(function(item) {
        calBal.push(item.calorieBalance);
        weight.push(item.weight);
        hrv.push(item.hrv);
    });
    // Add totals to dashnoard

    // Calories
    // threeDayCalorieBal.html(calBal.slice(0, 3).reduce(function(a, b) {
    //     return a + b;
    // // }));
    console.log(calBal)
    threeDayCalorieBal.html(calBal.slice(0, 1));
    sevenDayCalorieBal.html(calBal.slice(0, 7).reduce(function(a, b) {
        return a + b;
    }));
    console.log(calBal.slice(0, 7));
    thirtyDayCalorieBal.html(calBal.slice(0, 30).reduce(function(a, b) {
        return a + b;
    }));

    // Weight
    // let thirtyDayWeightFlux = weight.slice(0, 1) - weight.slice(29, 30);
    let thrirtyDayTotalWeight = weight.slice(0, 30).reduce(function(a, b) {
        return a + b
    });
    let thirtyDayAverage = thrirtyDayTotalWeight / 30;
    let thirtyDayWeightFlux = Math.floor(weight.slice(0, 30).reduce(function(a, b) {
        return a + b
    }) / 30);
    dailyWeight.html(weight.slice(0, 1));
    oneDayFlux.html(weight.slice(0, 2).reduce(function(a, b) {
        return a - b
    }));
    thirtyDayAvg.html(thirtyDayWeightFlux);

    // HRV
    // dailyHrv.html(hrv.slice(0, 1));
    // sevenDayHrv.html(hrv.slice(0, 7).reduce(function(a, b) {
    //     return a + b
    // }) / 7);
    let sevenDayHrvAvg = hrv.slice(0, 7).reduce(function(a, b) {
        return a + b
    }) / 7;
    sevenDayHrv.html(Math.round(sevenDayHrvAvg * 10) / 10);
}