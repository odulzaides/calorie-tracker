export let saveInput = function(i) {
    console.log("Save Input", i.weight);
    fetch('http://localhost:3000/DAYS', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: i.date,
            weight: i.weight,
            consumed: i.consumed,
            burned: i.burned,
            hrv: i.hrv
        })
    });

}