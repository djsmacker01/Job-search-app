//
const employeeInput = document.getElementById("employee");
const submit = document.getElementById("submit");
const showMessage = document.getElementById("showMessage");
const container = document.getElementById("content");

// Add event listener
submit.addEventListener("click", async () => {
  if (employeeInput.value.trim() === "") {
    let profileDisplay = document.createElement("div");
    profileDisplay.textContent = "J";
    showMessage.appendChild(profileDisplay);
  } else {
    let response = await fetch("http://localhost:3000/jobTitle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobTitle: employeeInput.value }),
    });
    let responseData = await response.json();
    console.log(responseData);

    if (responseData.length > 0) {
      responseData.forEach((job) => {
        // Create a paragraph
        let { jobTitle, jobCategory } = job;
        let proDisplay = document.createElement("li");
        proDisplay.textContent = `${jobTitle} ${jobCategory}`;
        container.appendChild(proDisplay);

        // put data inside the paragraph

        // Append the paragraph to the div
        //  showMessage.appendChild();
      });
    } else {
      let proDisplay = document.createElement("div");
      proDisplay.textContent = "Sorry, no jobs found in that category";
      showMessage.appendChild(proDisplay);
    }

    //  profileDisplay.textContent

    // console.log("click event occure");
  }
});
