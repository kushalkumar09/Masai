document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("noteInput");
    const saveNoteBtn = document.getElementById("saveNoteBtn");
    const loadNoteBtn = document.getElementById("loadNoteBtn");
    const clearNoteBtn = document.getElementById("clearNoteBtn");
    const statusMessage = document.getElementById("statusMessage");

    // Load notes on page load
    if (localStorage.getItem("savedNote")) {
        noteInput.value = localStorage.getItem("savedNote");
    }

    // Save note to localStorage
    saveNoteBtn.addEventListener("click", () => {
        const noteText = noteInput.value.trim();
        if (noteText === "") {
            statusMessage.textContent = "Cannot save an empty note!";
            statusMessage.style.color = "red";
            return;
        }
        localStorage.setItem("savedNote", noteText);
        statusMessage.textContent = "Note saved successfully!";
        statusMessage.style.color = "green";
    });

    // Load notes from localStorage
    loadNoteBtn.addEventListener("click", () => {
        if (localStorage.getItem("savedNote")) {
            noteInput.value = localStorage.getItem("savedNote");
            statusMessage.textContent = "Note loaded!";
        } else {
            statusMessage.textContent = "No saved notes found!";
            statusMessage.style.color = "red";
        }
    });

    // Clear notes from localStorage
    clearNoteBtn.addEventListener("click", () => {
        localStorage.removeItem("savedNote");
        noteInput.value = "";
        statusMessage.textContent = "Notes cleared!";
        statusMessage.style.color = "red";
    });
});
