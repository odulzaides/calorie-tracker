export function appendData(i) { // add data to table
    let dataTable = $('#data-table');
    // TODO - add " rowspans these rows to make the size appropriate
    let tr = '<tr data-type="data-row"><td >' + i.date + '</td> <td r>' + Math.floor(i.weight) + '</td><td >' + Math.round(i.bmrCalc) +
        '</td> <td >' + Math.floor(i.consumed) + '</td><td>' + Math.floor(i.burned) +
        '</td><td>' + Math.floor(i.hrv) + '</td><td>' + Math.round(i.calorieBalance) + '</td><td><a href"#">edit</a></td></tr>';
    dataTable.append(tr);
}