// const submitBtn = document.getElementById("submitBtn");
// let rowIndex = 1;

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const formDataArray = [];

//   const userName = document.getElementById("name").value;
//   const userAge = document.getElementById("age").value;
//   const userDob = document.getElementById("dob").value;
//   const userGender = document.getElementById("gender").value;
//   const userEmail = document.getElementById("email").value;
//   const userStatus = document.getElementById("status").value;

//   const formData = {
//     name: userName,
//     age: userAge,
//     dob: userDob,
//     gender: userGender,
//     email: userEmail,
//     status: userStatus,
//   };
//   formDataArray.push(formData);
//   console.log(formDataArray);

//   function clearFormInputData() {
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("dob").value = "";
//     document.getElementById("gender").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("status").value = "";
//   }

//   const dataTable = document.getElementById("dataTable");
//   const tableContainer = document.getElementById("table-container");
//   tableContainer.style.display = "block";
//   console.log(dataTable.getElementsByTagName("tr").length);

//   let tableRow = document.createElement("tr");

//   const serialNumberCell = document.createElement("td");
//   serialNumberCell.textContent = rowIndex;
//   tableRow.appendChild(serialNumberCell);

//   rowIndex++;

//   for (const key in formData) {
//     const tableData = document.createElement("td");
//     tableData.textContent = formData[key];
//     tableRow.appendChild(tableData);
//   }

//   const actionsCell = document.createElement("td");
//   const editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   const deleteButton = document.createElement("button");

//   deleteButton.addEventListener("click", () => {
//     // Get the index of the row to be deleted
//     const index = tableRow.rowIndex; // The rowIndex property returns the position of a row in the rows collection of a table.

//     tableRow.remove();

//     // Update serial numbers of the remaining rows
//     const rows = dataTable.getElementsByTagName("tr");
//     for (let i = index; i < rows.length; i++) {
//       rows[i].getElementsByTagName("td")[0].textContent = i; // Update serial number
//     }
//   });

//   deleteButton.textContent = "Delete";
//   actionsCell.appendChild(editButton);
//   actionsCell.appendChild(deleteButton);
//   tableRow.appendChild(actionsCell);

//   dataTable.appendChild(tableRow);

//   clearFormInputData();
// });

// const submitBtn = document.getElementById("submitBtn");
// let rowIndex = 1;
// let editingRowId = null;

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const formDataArray = [];

//   const userName = document.getElementById("name").value;
//   const userAge = document.getElementById("age").value;
//   const userDob = document.getElementById("dob").value;
//   const userGender = document.getElementById("gender").value;
//   const userEmail = document.getElementById("email").value;
//   const userStatus = document.getElementById("status").value;

//   const formData = {
//     name: userName,
//     age: userAge,
//     dob: userDob,
//     gender: userGender,
//     email: userEmail,
//     status: userStatus,
//   };

//   function clearFormInputData() {
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("dob").value = "";
//     document.getElementById("gender").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("status").value = "";
//   }

//   const dataTable = document.getElementById("dataTable");
//   const tableContainer = document.getElementById("table-container");
//   tableContainer.style.display = "block";

//   let tableRow = document.getElementById(editingRowId);
//   if (!tableRow) {
//     tableRow = document.createElement("tr");
//     tableRow.setAttribute("id", Date.now());

//     const serialNumberCell = document.createElement("td");
//     serialNumberCell.textContent = rowIndex;
//     tableRow.appendChild(serialNumberCell);

//     rowIndex++;
//   }

//   for (const key in formData) {
//     const tableData = document.createElement("td");
//     tableData.textContent = formData[key];
//     tableRow.appendChild(tableData);
//   }

//   const actionsCell = document.createElement("td");
//   const editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   const deleteButton = document.createElement("button");

//   deleteButton.addEventListener("click", () => {
//     const index = tableRow.rowIndex;
//     tableRow.remove();

//     const rows = dataTable.getElementsByTagName("tr");
//     for (let i = index; i < rows.length; i++) {
//       rows[i].getElementsByTagName("td")[0].textContent = i;
//     }
//   });

//   editButton.addEventListener("click", () => {
//     document.getElementById("name").value = formData.name;
//     document.getElementById("age").value = formData.age;
//     document.getElementById("dob").value = formData.dob;
//     document.getElementById("gender").value = formData.gender;
//     document.getElementById("email").value = formData.email;
//     document.getElementById("status").value = formData.status;

//     editingRowId = tableRow.getAttribute("id");
//   });

//   deleteButton.textContent = "Delete";
//   actionsCell.appendChild(editButton);
//   actionsCell.appendChild(deleteButton);
//   tableRow.appendChild(actionsCell);

//   if (!document.getElementById(tableRow.getAttribute("id"))) {
//     dataTable.appendChild(tableRow);
//   }

//   clearFormInputData();
// });

// const submitBtn = document.getElementById("submitBtn");
// let rowIndex = 1;
// let editingRowId = null;

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   const userName = document.getElementById("name").value;
//   const userAge = document.getElementById("age").value;
//   const userDob = document.getElementById("dob").value;
//   const userGender = document.getElementById("gender").value;
//   const userEmail = document.getElementById("email").value;
//   const userStatus = document.getElementById("status").value;

//   const formData = {
//     name: userName,
//     age: userAge,
//     dob: userDob,
//     gender: userGender,
//     email: userEmail,
//     status: userStatus,
//   };

//   function clearFormInputData() {
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("dob").value = "";
//     document.getElementById("gender").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("status").value = "";
//   }

//   const dataTable = document.getElementById("dataTable");
//   const tableContainer = document.getElementById("table-container");
//   tableContainer.style.display = "block";

//   let tableRow = document.getElementById(editingRowId);
//   if (!tableRow) {
//     tableRow = document.createElement("tr");
//     tableRow.setAttribute("id", Date.now());

//     const serialNumberCell = document.createElement("td");
//     serialNumberCell.textContent = rowIndex;
//     tableRow.appendChild(serialNumberCell);

//     rowIndex++;
//   }

//   for (const key in formData) {
//     const tableData = document.createElement("td");
//     tableData.textContent = formData[key];
//     tableRow.appendChild(tableData);
//   }

//   const actionsCell = document.createElement("td");
//   const editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   const deleteButton = document.createElement("button");

//   deleteButton.addEventListener("click", () => {
//     const index = tableRow.rowIndex;
//     tableRow.remove();

//     const rows = dataTable.getElementsByTagName("tr");
//     for (let i = index; i < rows.length; i++) {
//       rows[i].getElementsByTagName("td")[0].textContent = i;
//     }
//   });

//   editButton.addEventListener("click", () => {
//     const cells = tableRow.getElementsByTagName("td");
//     document.getElementById("name").value = cells[1].textContent;
//     document.getElementById("age").value = cells[2].textContent;
//     document.getElementById("dob").value = cells[3].textContent;
//     document.getElementById("gender").value = cells[4].textContent;
//     document.getElementById("email").value = cells[5].textContent;
//     document.getElementById("status").value = cells[6].textContent;

//     editingRowId = tableRow.getAttribute("id");
//   });

//   deleteButton.textContent = "Delete";
//   actionsCell.appendChild(editButton);
//   actionsCell.appendChild(deleteButton);
//   tableRow.appendChild(actionsCell);

//   if (!document.getElementById(tableRow.getAttribute("id"))) {
//     dataTable.appendChild(tableRow);
//   }

//   clearFormInputData();
// });

// const submitBtn = document.getElementById("submitBtn");
// let rowIndex = 1;
// let editingRowId = null;

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   const userName = document.getElementById("name").value;
//   const userAge = document.getElementById("age").value;
//   const userDob = document.getElementById("dob").value;
//   const userGender = document.getElementById("gender").value;
//   const userEmail = document.getElementById("email").value;
//   const userStatus = document.getElementById("status").value;

//   const formData = {
//     name: userName,
//     age: userAge,
//     dob: userDob,
//     gender: userGender,
//     email: userEmail,
//     status: userStatus,
//   };

//   function clearFormInputData() {
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("dob").value = "";
//     document.getElementById("gender").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("status").value = "";
//   }

//   const dataTable = document.getElementById("dataTable");
//   const tableContainer = document.getElementById("table-container");
//   tableContainer.style.display = "block";

//   let tableRow = document.getElementById(editingRowId);
//   if (!tableRow) {
//     tableRow = document.createElement("tr");
//     tableRow.setAttribute("id", Date.now());

//     const serialNumberCell = document.createElement("td");
//     serialNumberCell.textContent = rowIndex;
//     tableRow.appendChild(serialNumberCell);

//     rowIndex++;
//   }

//   for (const key in formData) {
//     const tableData = document.createElement("td");
//     tableData.textContent = formData[key];
//     tableRow.appendChild(tableData);
//   }

//   const actionsCell = document.createElement("td");
//   const editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   const deleteButton = document.createElement("button");

//   deleteButton.addEventListener("click", () => {
//     const index = tableRow.rowIndex;
//     tableRow.remove();

//     const rows = dataTable.getElementsByTagName("tr");
//     for (let i = index; i < rows.length; i++) {
//       rows[i].getElementsByTagName("td")[0].textContent = i;
//     }
//   });

//   editButton.addEventListener("click", () => {
//     const cells = tableRow.getElementsByTagName("td");
//     document.getElementById("name").value = cells[1].textContent;
//     document.getElementById("age").value = cells[2].textContent;
//     document.getElementById("dob").value = cells[3].textContent;
//     document.getElementById("gender").value = cells[4].textContent;
//     document.getElementById("email").value = cells[5].textContent;
//     document.getElementById("status").value = cells[6].textContent;

//     editingRowId = tableRow.getAttribute("id");
//   });

//   deleteButton.textContent = "Delete";
//   actionsCell.appendChild(editButton);
//   actionsCell.appendChild(deleteButton);
//   tableRow.appendChild(actionsCell);

//   if (!document.getElementById(tableRow.getAttribute("id"))) {
//     dataTable.appendChild(tableRow);
//   }

//   clearFormInputData();
// });

// new code

const submitBtn = document.getElementById("submitBtn");
let rowIndex = 1;
let editingRowId = null;
let editingRow = null;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const userName = document.getElementById("name").value;
  const userAge = document.getElementById("age").value;
  const userDob = document.getElementById("dob").value;
  const userGender = document.getElementById("gender").value;
  const userEmail = document.getElementById("email").value;
  const userStatus = document.getElementById("status").value;

  const formData = {
    name: userName,
    age: userAge,
    dob: userDob,
    gender: userGender,
    email: userEmail,
    status: userStatus,
  };

  function clearFormInputData() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("email").value = "";
    document.getElementById("status").value = "";
  }

  const dataTable = document.getElementById("dataTable");
  const tableContainer = document.getElementById("table-container");
  tableContainer.style.display = "block";

  if (editingRow) {
    const cells = editingRow.getElementsByTagName("td");
    cells[1].textContent = formData.name;
    cells[2].textContent = formData.age;
    cells[3].textContent = formData.dob;
    cells[4].textContent = formData.gender;
    cells[5].textContent = formData.email;
    cells[6].textContent = formData.status;
    editingRow = null;
    editingRowId = null;
  } else {
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id", Date.now());

    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = rowIndex;
    tableRow.appendChild(serialNumberCell);

    rowIndex++;

    for (const key in formData) {
      const tableData = document.createElement("td");
      tableData.textContent = formData[key];
      tableRow.appendChild(tableData);
    }

    const actionsCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");

    deleteButton.addEventListener("click", () => {
      const index = tableRow.rowIndex;
      tableRow.remove();

      const rows = dataTable.getElementsByTagName("tr");
      for (let i = index; i < rows.length; i++) {
        rows[i].getElementsByTagName("td")[0].textContent = i;
      }
    });

    editButton.addEventListener("click", () => {
      editingRow = tableRow;
      editingRowId = tableRow.getAttribute("id");

      const cells = tableRow.getElementsByTagName("td");
      document.getElementById("name").value = cells[1].textContent;
      document.getElementById("age").value = cells[2].textContent;
      document.getElementById("dob").value = cells[3].textContent;
      document.getElementById("gender").value = cells[4].textContent;
      document.getElementById("email").value = cells[5].textContent;
      document.getElementById("status").value = cells[6].textContent;
    });

    deleteButton.textContent = "Delete";
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    tableRow.appendChild(actionsCell);

    dataTable.appendChild(tableRow);
  }

  clearFormInputData();
});
