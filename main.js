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

    // TODO - for loop to fill in table with row for each day. Limit to 2 weeks
    function viewData() { // add data to table
        let dataTable = $('#data-table');
        dataArray.forEach(function(i) {
            //  BMR and Calorie balance calculations for each day
            let bmrCalc = (88.3 + (13.4 * (i.weight / 2.2)) + (4.8 * (68 / 0.39)) - (5.7 * 60));
            let totalCalories = (bmrCalc + Math.floor(i.burned));
            console.log(bmrCalc + i.burned, typeof(i.burned));
            let calorieBalance = i.consumed - totalCalories;
            console.log("BMR, Total Calories, and Calorie Balance", typeof(bmrCalc), typeof(totalCalories), typeof(calorieBalance));
            console.log("In viewData()", i.date, typeof(i.weight), typeof(i.consumed), i.burned, i.hrv);

            // create new row.
            let tr = '<tr><td>' + i.date + '</td> <td>' + Math.floor(i.weight) + '</td><td>' + bmrCalc +
                '</td> <td>' + Math.floor(i.consumed) + '</td><td>' + Math.floor(i.burned) +
                '</td><td>' + Math.floor(i.hrv) + '</td><td>' + calorieBalance + '</td></tr>';
            dataTable.append(tr);
            console.log(dataArray)

        });
    };
    // Add to local storage values to table /////

    //  end events ///////////

}); // end ready...