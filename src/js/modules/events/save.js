import { saveInput } from '../controllers/saveInput.js';

export function submitInput() {
    console.log("clicked save");
    $(save).click(function(e) {
        let dayObject = {
            date: $('#date').val(),
            weight: $('#weight').val(),
            consumed: $('#consumed').val(),
            burned: $('#burned').val(),
            hrv: $('#hrv').val()
        };
        $('#date').val('');
        $('#weight').val('');
        $('#consumed').val('');
        $('#burned').val('');
        $('#hrv').val('');
        saveInput(dayObject);
    });
}