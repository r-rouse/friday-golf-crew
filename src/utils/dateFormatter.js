export function formatDate(dateString) {
    const date = new Date(dateString);
  
    let month = '' + (date.getMonth() + 1), // getMonth() returns 0-11
        day = '' + date.getDate(),
        year = date.getFullYear();
  
    // Pad single-digit month and day with a leading zero
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [month, day, year].join('/');
  }