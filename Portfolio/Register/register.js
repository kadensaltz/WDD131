document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addButton = document.getElementById("add");
  
    addButton.addEventListener("click", () => {
      participantCount += 1;
      const newParticipantHTML = participantTemplate(participantCount);
      addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
    });
  
    function participantTemplate(count) {
      return `
        <section class="participant${count}">
          <p>Participant ${count}</p>
          <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" required />
          </div>
          <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
          </div>
          <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
          </div>
          <div class="item">
            <label for="date${count}">Desired Date<span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select id="grade${count}" name="grade${count}">
              <option value="" disabled selected></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>
      `;
    }
  });
    // Event listener for form submission
    form.addEventListener("submit", submitForm);
  
    function submitForm(event) {
      event.preventDefault(); // Prevent the form from reloading the page
  
      // Calculate total fees
      const totalFees = calculateTotalFees();
  
      // Get the adult name
      const adultName = document.getElementById("adult_name").value;
  
      // Create and display the summary message
      const message = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees} in Fees.`;
      summarySection.textContent = message;
  
      // Hide the form and show the summary
      form.style.display = "none";
      summarySection.classList.remove("hide");
    }
  
    /**
     * Calculates the total fees from all participant fee inputs.
     * @returns {number} - The sum of all participant fees.
     */
    function calculateTotalFees() {
      const feeInputs = document.querySelectorAll("[id^=fee]"); // Selects all inputs with id starting with 'fee'
      let total = 0;
  
      feeInputs.forEach((input) => {
        const fee = parseFloat(input.value) || 0; // Convert input value to number, default to 0 if NaN
        total += fee;
      });
  
      return total.toFixed(2); // Return total rounded to two decimal places
    }
  