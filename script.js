function updatePreview() {
  document.getElementById("preview-name").textContent =
    document.getElementById("name").value || "Your Name";
  document.getElementById("preview-email").textContent =
    document.getElementById("email").value || "example@example.com";
  document.getElementById("preview-phone").textContent =
    document.getElementById("phone").value || "1234567890";
  document.getElementById("preview-skills").textContent =
    document.getElementById("skills").value || "HTML, CSS, JavaScript";
  document.getElementById("preview-education").textContent =
    document.getElementById("education").value || "Your Degree, College Name";
  document.getElementById("preview-projects").textContent =
    document.getElementById("projects").value || "Project Name - Description";
}

function loadPhoto(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const img = document.getElementById("preview-photo");
    img.src = reader.result;
    img.style.display = "block";
  };
  if (file) reader.readAsDataURL(file);
}

function downloadPDF() {
  const resume = document.getElementById("resume");
  html2pdf().from(resume).save("My_Resume.pdf");
}

