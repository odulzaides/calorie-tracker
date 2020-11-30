$(document).ready(function() { // ready

    // global variables
    const save = $('#save');
    let dataArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(dataArray));
    const data = JSON.parse(localStorage.getItem("data"));
    viewData();

    // ******* events ********

    //  ///////  save button event ///////////
    $(save).click(function(e) { // save inputs to localStorage
        e.preventDefault();
        // data object of inputs
        let dayObject = {
            date: $('#date').val(),
            weight: $('#weight').val(),
            consumed: $('#consumed').val(),
            burned: $('#burned').val(),
            hrv: $('#hrv').val()
        }
        dataArray.push(dayObject);

        //add to local storage 
        localStorage.setItem('data', JSON.stringify(dataArray));
        $('#date').val('');
        $('#weight').val('');
        $('#consumed').val('');
        $('#burned').val('');
        $('#hrv').val('');
        console.log("In click function", dataArray);
        viewData();
    }); // end save click event

    // *** Append data to rows in table
    // function appedData(date, weight, bmr, consumed, burned, hrv) {

    // }

    // TODO - Limit to 2 weeks
    function viewData() { // add data to table
        let dataTable = $('#data-table');
        let rows = $('[data-type="data-row"]');
        rows.remove();
        let tableHeader = '<thead class="thead-dark"><tr><th>Date</th><th>Weight</th><th>BMR</th><th>Calories Consumed</th><th>Calories Burned</th><th>HRV Recovery</th><th>Calorie Balance</th></tr> </thead>';



        dataArray.forEach(function(i) {
            //  BMR and Calorie balance calculations for each day
            let bmrCalc = (88.3 + (13.4 * (i.weight / 2.2)) + (4.8 * (68 / 0.39)) - (5.7 * 60));
            let totalCalories = (bmrCalc + Math.floor(i.burned));
            // console.log(bmrCalc + i.burned, typeof(i.burned));   
            let calorieBalance = i.consumed - totalCalories;

            // console.log("BMR, Total Calories, and Calorie Balance", typeof(bmrCalc), typeof(totalCalories), typeof(calorieBalance));
            // console.log("In viewData()", i.date, typeof(i.weight), typeof(i.consumed), i.burned, i.hrv);

            //    TODO - need to make this its own function and call it from this event
            // TODO - add " rowspans these rows to make the size appropriate
            let tr = '<tr data-type="data-row"><td >' + i.date + '</td> <td r>' + Math.floor(i.weight) + '</td><td >' + Math.round(bmrCalc) +
                '</td> <td >' + Math.floor(i.consumed) + '</td><td>' + Math.floor(i.burned) +
                '</td><td>' + Math.floor(i.hrv) + '</td><td>' + Math.round(calorieBalance) + '</td></tr>';
            dataTable.append(tr);
        });
    };
    // Add to local storage values to table /////

    //  end events ///////////

}); // end ready...