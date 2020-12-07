import { appendData } from './appenData.js'

// TODO - !  Limit to 2 weeks and add an options
export let viewData = function(i) {
    //clear table to add new data
    let rows = $('[data-type="data-row"]');
    rows.remove();
    i.slice().reverse().forEach(function(i) {
        console.log("in loop", i)
            //  BMR and Calorie balance calculations for each day
        let bmrCalc = (88.3 + (13.4 * (i.weight / 2.2)) + (4.8 * (68 / 0.39)) - (5.7 * 60));
        let totalCalories = (bmrCalc + Math.floor(i.burned));
        let calorieBalance = i.consumed - totalCalories;
        let dayObj = {
            date: i.date,
            weight: Math.floor(i.weight),
            bmrCalc: Math.round(bmrCalc),
            consumed: Math.floor(i.consumed),
            burned: Math.floor(i.burned),
            hrv: Math.floor(i.hrv),
            calorieBalance: Math.round(calorieBalance)
        }
        appendData(dayObj);
    });
};