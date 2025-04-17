export default function availability() {
    const arrival = document.getElementById("arrival");
    const departure = document.getElementById("departure");

    const today = new Date();
    const departureDate = new Date(today);
    departureDate.setDate(today.getDate() + 3);

    const formatedDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    arrival.value = formatedDate(today);
    departure.value = formatedDate(departureDate);

}