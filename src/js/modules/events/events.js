import { saveInput } from '../model/saveInput.js';

export function submitInput() {
    console.log("clicked save");
    $(save).click(function(e) {
        let dayObject = {
            date: $('#datepicker').val(),
            weight: $('#weight').val(),
            consumed: $('#consumed').val(),
            burned: $('#burned').val(),
            hrv: $('#hrv').val()
        };
        console.log(dayObject.weight);

        $('#date').val('');
        $('#weight').val('');
        $('#consumed').val('');
        $('#burned').val('');
        $('#hrv').val('');
        saveInput(dayObject);
    });
}