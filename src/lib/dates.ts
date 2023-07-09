export function formatDate(date: Date) {

    //if the date is not a date object, then convert it to a date object
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    const options: Intl.DateTimeFormatOptions = {day: 'numeric', month: 'short', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options);

    const day = date.getDate();
    const suffix = getDaySuffix(day);

    return formattedDate.replace(/(\d+)(th|nd|st|rd)/, `$1${suffix}`);
}

export function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }

    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}
