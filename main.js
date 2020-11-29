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
        // FIXME - clear input boxes


        //add to local storage 
        let dayObjStr = JSON.stringify(dayObject);
        // TODO - check to see if date "key" exists in localStorage first
        localStorage.setItem(date, dayObjStr);

        // Add to local storage values to table /////
        // TODO - for loop to fill in table with row for each day. Limit to 2 weeks
        let dayObj = JSON.parse(localStorage.getItem("11/28"));

        console.log("Hello", dayObj, typeof(dayObj), dayObj.consumed);

    }); // end save click event

    //  end events

    // ////// Function to remove duplicate dates ////////


}); // end ready...