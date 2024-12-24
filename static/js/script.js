const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const uploadText = document.getElementById("uploadText");
const removeButton = document.getElementById("removeButton");

dropZone.addEventListener("click", (e) => {
  e.preventDefault();
  fileInput.click();
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("border-blue-500", "bg-blue-50");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("border-blue-500", "bg-blue-50");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("border-blue-500", "bg-blue-50");
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  handleFile(file);
});

function handleFile(file) {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.classList.remove("hidden");
      uploadText.classList.add("hidden");
      removeButton.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
}

removeButton.addEventListener("click", () => {
  preview.src = "";
  preview.classList.add("hidden");
  uploadText.classList.remove("hidden");
  removeButton.classList.add("hidden");
  fileInput.value = "";
});
