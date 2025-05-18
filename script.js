const form = document.getElementById('pdfForm');
const summaryBox = document.getElementById('summaryBox');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById('pdfFile');
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('pdf', file);

  summaryBox.innerHTML = "⏳ Summarizing...";

  const response = await fetch("https://YOUR_RENDER_BACKEND_URL_HERE/summarize", {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  summaryBox.innerHTML = `<h2>📝 Key Points:</h2><p>${data.summary}</p>`;
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
