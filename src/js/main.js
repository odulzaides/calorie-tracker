import { submitInput } from './modules/events/events.js';
import { saveInput } from './modules/model/saveInput.js';
import { getData } from './modules/controllers/getData.js';
import { viewData } from './modules/views/fillTable.js';


$(document).ready(function() { // ready

    // global variables
    const save = $('#save');

    $('#datepicker').datepicker({
        format: "DD/MM/YYYY"
    });

    submitInput();

}); // end ready...