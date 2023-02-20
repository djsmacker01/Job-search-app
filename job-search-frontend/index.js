//
const employeeInput = document.getElementById("employee");
const submit = document.getElementById("submit");
const showMessage = document.getElementById("showMessage");
const container = document.getElementById("content");

// Add event listener
submit.addEventListener("click", async () => {
  // clear messages
  showMessage.innerHTML = "";

  if (employeeInput.value.trim() === "") {
    let profileDisplay = document.createElement("div");
    profileDisplay.textContent = "Enter job categories";
    showMessage.appendChild(profileDisplay);
  } 
  else 
  {
    let reqData = {jobCategory : employeeInput.value.toUpperCase()};
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
        let { jobTitle, annualSalary } = job;
        
        let profileDisplay = document.createElement("div");

        profileDisplay.textContent = `${jobTitle}  Annual Salary: (${annualSalary})`;

        container.appendChild(profileDisplay);

        // put data inside the paragraph

        // Append the paragraph to the div
        //  showMessage.appendChild();
      });
    } else {
      let profileDisplay = document.createElement("div");
      profileDisplay.textContent = "Sorry, no jobs found in that category";
      showMessage.appendChild(profileDisplay);
    }

    //  profileDisplay.textContent

    // console.log("click event occure");
  }
});
