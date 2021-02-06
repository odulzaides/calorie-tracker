import { dashboardData } from './dashboard.js';

// TODO - !  Limit to 2 weeks and add an options
export let viewData = function(i) {
    //clear table to add new data
    let rows = $('[data-type="data-row"]');
    rows.remove();

    // set Arrays for Dashboard
    let dashboardObjects = [];
    i.slice().reverse().forEach(function(i) {
        console.log()
            //  BMR and Calorie balance calculations for each day
            // = IF(C48 > 0, ((88.362 + (13.397 * C48 * 0.453592)) + ((4.799 * 172.72) - (5.677 * 60))) * 1.37, "")
        let bmrCalc = (88.3 + (13.397 * (i.weight * 0.453592)) + (4.799 * (68 / 0.39)) - (5.677 * 60)) * 1.37;
        let totalCalories = (bmrCalc - 10 + Math.floor(i.burned));
        let calorieBalance = i.consumed - totalCalories;
        let dayObj = {
            id: i.id,
            date: i.date,
            weight: Number(i.weight),
            bmrCalc: Math.round(bmrCalc),
            consumed: Math.floor(i.consumed),
            burned: Math.floor(i.burned),
            hrv: Math.floor(i.hrv),
            calorieBalance: Math.round(calorieBalance)
        }
        console.log(dayObj.date, i.weight, "BMRCalc", Math.floor(bmrCalc), "Total Cals", Math.floor(totalCalories), "Cal Balance", Math.floor(calorieBalance))

        // console.log("Weight----", dayObj.id);
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
            // console.log("Hello.... ", typeof(i.hrv), dashboardObj.hrv, dashboardObj.id, typeof(dashboardObj.hrv));
        dashboardObjects.push(dashboardObj);
        dashboardData(dashboardObjects);
    });
};
//  Add data to table in HTML
function appendData(i) {
    // console.log("Append Data-----", Math.floor(i.weight));
    let dataTable = $('#data-table');
    let tr = '<tr data-type="data-row"><td class="d-none">' + i.id + '</td><td class="m-0 p-0 pt-1 pb-1">' + i.date + '</td> <td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.weight) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.round(i.bmrCalc) +
        '</td> <td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.consumed) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.burned) +
        '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.hrv) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.round(i.calorieBalance) + '</td></tr>';
    dataTable.append(tr);
};