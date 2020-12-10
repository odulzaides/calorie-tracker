export function appendData(i) { // add data to table
    let dataTable = $('#data-table');
    // TODO - add " rowspans these rows to make the size appropriate
    let tr = '<tr data-type="data-row"><td class="m-0 p-0 pt-1 pb-1">' + i.date + '</td> <td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.weight) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.round(i.bmrCalc) +
        '</td> <td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.consumed) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.burned) +
        '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.floor(i.hrv) + '</td><td class="m-0 p-0 pt-1 pb-1">' + Math.round(i.calorieBalance) + '</td></tr>';
    dataTable.append(tr);
}