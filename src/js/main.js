import { submitInput } from './modules/events/save.js';
import { saveInput } from './modules/controllers/saveInput.js';
import { getData, fillDashboard } from './modules/controllers/getData.js';
import { viewData } from './modules/views/fillTable.js';

$(document).ready(function() {

    // global variables
    const save = $('#save');

    submitInput();
    fillDashboard();

}); // end ready...