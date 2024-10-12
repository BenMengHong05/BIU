function js() {
    const input = document.getElementById('full-date').value;
    const result = document.getElementById('result');
    if (!/^\d{2}-\d{1,2}-\d{4,5}$/.test(input)) {
        result.textContent = 'Please enter a date in the format DD-MM-YYYY';
        return;
    }
    const [day, month, year] = input.split('-');
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[parseInt(month) - 1];
    result.textContent = `${day} / ${monthName} / ${year}`;
}

