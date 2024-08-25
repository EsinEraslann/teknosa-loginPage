const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#loginPassword");
const eyeIcon = document.querySelector("#eyeIcon");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (type === "password") {
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});

async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    const countrySelect = document.querySelector("#countryCode");

    countries.sort((a, b) => a.name.common.localeCompare(b.name.common)); //alfabetik sırala

    // Ülkeleri selecte ekle
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.textContent = country.name.common;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Ülkeler yüklenirken bir hata oluştu:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchCountries);
