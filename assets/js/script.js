// Sample event data (you can fetch this data from an API or database)
const events = [
    { name: "Event 1", date: "2023-10-15" },
   
];

// Function to display events
function displayEvents() {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = "";

    events.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `
            <h2>${event.name}</h2>
            <p>Date: ${event.date}</p>
        `;
        eventList.appendChild(eventElement);
    });
}

// Call the function to display events when the page loads
window.onload = displayEvents;
