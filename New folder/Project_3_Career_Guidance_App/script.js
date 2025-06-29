function handleLogin() {
  const email = document.getElementById("email").value;
  alert("Welcome " + email + "! Logged in successfully.");
}

function selectLocation(location) {
  const career = document.getElementById("career").value;
  const collegeList = document.getElementById("collegeList");

  collegeList.innerHTML = "";

  // Fake data
  const colleges = [
    `${career} College A (${location})`,
    `${career} College B (${location})`,
    `${career} College C (${location})`
  ];

  colleges.forEach((college) => {
    const li = document.createElement("li");
    li.textContent = college;
    collegeList.appendChild(li);
  });
}
