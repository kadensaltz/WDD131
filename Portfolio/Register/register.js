document.addEventListener("DOMContentLoaded", () => {
  let participantCount = 1;
  const addButton = document.getElementById("add");
  const form = document.querySelector("form");
  const summarySection = document.getElementById("summary");

  addButton.addEventListener("click", () => {
    participantCount += 1;
    const newParticipantHTML = participantTemplate(participantCount);
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
  });

  form.addEventListener("submit", submitForm);

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

  function submitForm(event) {
    event.preventDefault();

    const totalFee = calculateTotalFees();
    const adultName = document.getElementById("adult_name").value;

    const info = {
      name: adultName,
      participants: participantCount,
      feeTotal: totalFee,
    };

    const message = successTemplate(info);
    summarySection.textContent = message;

    form.style.display = "none";
    summarySection.classList.remove("hide");
  }

  function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.feeTotal} in Fees.`;
  }

  function calculateTotalFees() {
    const feeInputs = document.querySelectorAll("[id^=fee]");
    let total = 0;

    feeInputs.forEach((input) => {
      const fee = parseFloat(input.value) || 0;
      total += fee;
    });

    return total.toFixed(2);
  }
});