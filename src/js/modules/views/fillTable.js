import { dashboardData } from './dashboard.js';

// TODO - !  Limit to 2 weeks and add an options
export let viewData = function(i) {
    //clear table to add new data
    let rows = $('[data-type="data-row"]');
    rows.remove();

    // set Arrays for Dashboard
    let dashboardObjects = [];

    i.slice().reverse().forEach(function(i) {
        //  BMR and Calorie balance calculations for each day
        let bmrCalc = (88.3 + (13.4 * (i.weight / 2.2)) + (4.8 * (68 / 0.39)) - (5.7 * 60));
        let totalCalories = (bmrCalc + Math.floor(i.burned));
        let calorieBalance = i.consumed - totalCalories;
        let dayObj = {
                date: i.date,
                weight: Number(i.weight),
                bmrCalc: Math.round(bmrCalc),
                consumed: Math.floor(i.consumed),
                burned: Math.floor(i.burned),
                hrv: Math.floor(i.hrv),
                calorieBalance: Math.round(calorieBalance)
            }
            // console.log("Weight----", Math.floor(i.weight));
            // Fill daily totals table
        appendData(dayObj);

        // Fill Dashboard
        // send to a function with weight,burned,hrv, calorieBalance
        let dashboardObj = {
            weight: Math.floor(i.weight),
            burned: Math.floor(i.burned),
            hrv: Number(i.hrv),
            calorieBalance: Math.round(calorieBalance)
        }
        console.log("Hello.... ", typeof(i.hrv), dashboardObj.hrv, typeof(dashboardObj.hrv));
        dashboardObjects.push(dashboardObj);
        dashboardData(dashboardObjects);
    });
};
//  Add data to table in HTML
function appendData(i) {
    // console.log("Append Data-----", Math.floor(i.weight));
    let dataTable = $('#data-table');
    let tr = '<tr data-type="data-row"><td class="m-0 p-0 pt-1 pb-1">' + i.date + '</td> <td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.weight) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.round(i.bmrCalc) +
        '</td> <td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.consumed) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.burned) +
        '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.hrv) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.round(i.calorieBalance) + '</td></tr>';
    dataTable.append(tr);
};