import { viewData } from '../views/fillTable.js';

export let getData = (function() {
    let data =
        fetch('http://localhost:3000/DAYS')
        .then(function(response) {
            return response.json()
        }).then(datar => viewData(datar));

})();

// write function to get last 3 days cal balance, 7 day hrv avg, difference between weight 7 days ago and today.

export function fillDashboard() {
    console.log("Im the dashboard function");
}