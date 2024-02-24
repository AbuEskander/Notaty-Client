function updateNotesTable(SearchTitle) {
  let Table = document.getElementById("notes-table");
  let RowCount = Table.rows.length;
  while (--RowCount) {
    table.deleteRow(RowCount);
  }
  getNotes(SearchTitle).then((data) => {
    data.forEach((note) => {
      let row = Table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      cell1.innerHTML = note["title"];
      cell2.innerHTML = note["content"];
      cell3.innerHTML = note["updatedDate"];
      cell4.innerHTML = `<a href ="#"><img src="images/edit.png" style="width:22px;"/></a>
                         <a onclick="confirmDeleteNote('${note["_id"]}')" href ="#"><img src="images/delete.png" style="width:22px;"/></a>`;
    });
  });
}
function searchNotes() {
  let Search = document.getElementById("searchInput").value;
  updateNotesTable(Search);
}

function confirmDeleteNote(noteId) {
  let action = confirm("Are you sure you want to delete this note ?");
  if (action) {
    deleteNote(noteId).then(() => {
      updateNotesTable();
    });
  }
}
