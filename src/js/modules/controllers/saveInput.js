export let saveInput = function(i) {
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