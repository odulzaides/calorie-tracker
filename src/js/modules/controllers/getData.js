import { viewData } from '../views/fillTable.js';

export let getData = (function() {
    console.log("getData");
    let data =
        fetch('http://localhost:3000/DAYS')
        .then(function(response) {
            return response.json()
        }).then(datar => viewData(datar));

})();

export function fillDashboard() {
    console.log("Im the dashboard function");
}