function login() {
  const user = document.getElementById("username").value;
  alert(`Welcome, ${user}! You are now logged in.`);
}

function searchBunks() {
  const city = document.getElementById("locationInput").value;
  const bunkList = document.getElementById("bunkList");
  bunkList.innerHTML = "";

  if (!city) {
    alert("Please enter a city or area.");
    return;
  }

  // Dummy data
  const bunks = [
    { name: "EV FastCharge Station", location: city, slots: 3 },
    { name: "Eco EV Power Hub", location: city, slots: 5 },
    { name: "GreenWatt Bunk", location: city, slots: 1 }
  ];

  bunks.forEach((bunk) => {
    const li = document.createElement("li");
    li.textContent = `${bunk.name} - ${bunk.location} (Slots: ${bunk.slots})`;
    bunkList.appendChild(li);
  });
}
