$(document).ready(function() { // ready

    // global variables
    const save = $('#save');

    // ******* events ********

    //  ///////  save button event ///////////
    $(save).click(function() { // save inputs to localStorage
        let date = $('#date').val();

        // data object of inputs
        let dayObject = {
            consumed: $('#consumed').val(),
            burned: $('#burned').val(),
            hrv: $('#hrv').val()
        }

        // clear input boxes
        $('#date').val('');
        $('#consumed').val('');
        $('#burned').val('');
        $('#hrv').val('');

        //add to local storage 
        let dayObjStr = JSON.stringify(dayObject);
        if (localStorage.getItem(date)) { // check to see if date "key" exists
            let rewrite = confirm("Date already entered. Do you want to replace?");
            if (rewrite == false) {
                return false;
            } else { // rewrite data if confirmed...
                localStorage.setItem(date, dayObjStr);
                console.log("not entered");
            }
        }
        localStorage.setItem(date, dayObjStr);

        // Add to local storage values to table /////
        // TODO - for loop to fill in table with row for each day. Limit to 2 weeks
        let dayObj = JSON.parse(localStorage.getItem("11/28"));

        console.log("Hello", dayObj, typeof(dayObj), dayObj.consumed);

    }); // end save click event

    //  end events

    // ////// Function to remove duplicate dates ////////


}); // end ready...