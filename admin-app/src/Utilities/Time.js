export default function Time() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = String(today.getSeconds()).padStart(2, '0');
    let date = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

    return date;
}