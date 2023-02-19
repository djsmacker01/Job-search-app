//
const employeeInput = document.getElementById("employee");
const submit = document.getElementById("submit");
const showMessage = document.getElementById("showMessage");
const container = document.getElementById("content");

// Add event listener
submit.addEventListener("click", async () => {
  showMessage.innerHTML = "";

  if (employeeInput.value.trim() === "") {
    let profileDisplay = document.createElement("div");
    profileDisplay.textContent = "Enter job categories";
    showMessage.appendChild(profileDisplay);
  } 
  else 
  {
    let reqData = {jobCategory: employeeInput.value.toUpperCase()};
    let response = await fetch("http://localhost:3000/jobTitle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqData),
    });

    // console.log(responseData);
    let responseData = await response.json();

    container.innerHTML = "";

    if (responseData.length > 0) {
      responseData.forEach((job) => {
        // Create a paragraph
        let { jobTitle, jobCategory } = job;
        let profileDisplay = document.createElement("li");
        profileDisplay.textContent = `${jobTitle} ${jobCategory}`;
        container.appendChild(profileDisplay);

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
