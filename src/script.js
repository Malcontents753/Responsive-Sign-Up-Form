document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const form = document.forms["myForm"];

  // Real-time validation for Name
  nameInput.addEventListener("input", () => {
    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required.";
    } else {
      nameError.textContent = "";
    }
  });

  // Real-time validation for Email
  emailInput.addEventListener("input", () => {
    const value = emailInput.value.trim();

    if (!value) {
      emailError.textContent = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }
  });

  // Validate on Submit
  form.addEventListener("submit", (e) => {
    let hasError = false;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required.";
      hasError = true;
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required.";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      hasError = true;
    }

    if (hasError) {
      e.preventDefault();
    }
  });
});
