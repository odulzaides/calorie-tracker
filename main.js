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
        // e.preventDefault();
        // data object of inputs
        let dayObject = {
                date: $('#date').val(), // TODO - !!! convert to date for calculations
                weight: $('#weight').val(),
                consumed: $('#consumed').val(),
                burned: $('#burned').val(),
                hrv: $('#hrv').val()
            }
            //add to dataArray and localStorage ...
        dataArray.push(dayObject);
        localStorage.setItem('data', JSON.stringify(dataArray));
        // clear inputs
        $('#date').val('');
        $('#weight').val('');
        $('#consumed').val('');
        $('#burned').val('');
        $('#hrv').val('');
        viewData();
    }); // end save click event

    // *** Append data to rows in table ********
    function appedData(i) {
        let dataTable = $('#data-table');

        // TODO - add " rowspans these rows to make the size appropriate
        let tr = '<tr data-type="data-row"><td >' + i.date + '</td> <td r>' + Math.floor(i.weight) + '</td><td >' + Math.round(i.bmrCalc) +
            '</td> <td >' + Math.floor(i.consumed) + '</td><td>' + Math.floor(i.burned) +
            '</td><td>' + Math.floor(i.hrv) + '</td><td>' + Math.round(i.calorieBalance) + '</td><td><a href"#">edit</a></td></tr>';
        dataTable.append(tr);
    } // ***** end appedData()


    // TODO - !  Limit to 2 weeks and add an options 
    function viewData(i) { // add data to table
        //clear table to add new data
        let rows = $('[data-type="data-row"]');
        rows.remove();

        dataArray.slice().reverse().forEach(function(i) {
            //  BMR and Calorie balance calculations for each day
            let bmrCalc = (88.3 + (13.4 * (i.weight / 2.2)) + (4.8 * (68 / 0.39)) - (5.7 * 60));
            let totalCalories = (bmrCalc + Math.floor(i.burned));
            // console.log(bmrCalc + i.burned, typeof(i.burned));   
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
            console.log(dayObj.calorieBalance);
            appedData(dayObj);
        }); // ****** end viewData()
    };
    //  end events ///////////


}); // end ready...