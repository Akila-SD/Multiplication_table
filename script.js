function generateTable() {
    const number = document.getElementById('numberInput').value;
    if (!number) {
        alert('Please enter a valid number.');
        return;
    }

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Clear previous table if any

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headRow = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = 'Multiplication Table for ' + number;
    th.colSpan = 2;
    headRow.appendChild(th);
    thead.appendChild(headRow);

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = `${number} x ${i}`;
        cell2.textContent = number * i;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}
