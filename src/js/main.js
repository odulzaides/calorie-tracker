import { submitInput } from './modules/events/save.js';
import { saveInput } from './modules/controllers/saveInput.js';
import { getData, fillDashboard } from './modules/controllers/getData.js';
import { viewData } from './modules/views/fillTable.js';

submitInput();
$(document).ready(function() { // ready

    // global variables
    const save = $('#save');

    submitInput();
    fillDashboard();

}); // end ready...