const baseUrl = "http://localhost:3000";

async function addNote(noteData) {
  const response = await fetch(baseUrl + "/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return response.json();
}

async function updateNote(noteData) {
  const response = await fetch(baseUrl + "/notes", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return response.json();
}
async function deleteNote(noteId) {
  const response = await fetch(baseUrl + "/notes/" + noteId, {
    method: "DELETE",
  });
  return response.json();
}

async function getNotebyID(noteId) {
  const response = await fetch(baseUrl + "/notes/" + noteId);
  return response.json();
}

async function getNotes(NoteTitle) {
  let url = `${baseUrl}/notes`;
  if (NoteTitle) url += `/?title=${NoteTitle}`;
  const response = await fetch(url);
  return response.json();
}
