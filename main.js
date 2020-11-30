$(document).ready(function() { // ready

    // global variables
    const save = $('#save');
    let dataArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

    localStorage.setItem('data', JSON.stringify(dataArray));
    const data = JSON.parse(localStorage.getItem("data"))
    console.log(data);
    // ******* events ********

    //  ///////  save button event ///////////
    $(save).click(function() { // save inputs to localStorage
        // data object of inputs
        let dayObject = {
            date: $('#date').val(),
            consumed: $('#consumed').val(),
            burned: $('#burned').val(),
            hrv: $('#hrv').val()
        }
        dataArray.push(dayObject);

        //add to local storage 
        localStorage.setItem('data', JSON.stringify(dataArray));
        $('#date').val('');
        $('#consumed').val('');
        $('#burned').val('');
        $('#hrv').val('');
    }); // end save click event

    // TODO - for loop to fill in table with row for each day. Limit to 2 weeks

    // Add to local storage values to table /////

    //  end events ///////////

}); // end ready...