export function dashboardData(data) {
    // 3 day calorie balance
    let calBal = [];
    let threeDayCalorieBal = $('#3-day-calorie-balance');
    data.forEach(function(item) {
        calBal.push(item.calorieBalance);
    })

    let calBalance = calBal.splice(0, 3).reduce(function(a, b) {
        return a + b;
    });
    threeDayCalorieBal.html(calBalance);


    console.log(calBalance);
}