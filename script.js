
// CRUD = Create,read,update,delete

// Global variables
var row = null;

function Submit() {
    var dataEntered = retriveData();
    // console.log(dataEntered);
    var readData = readingDataFromLocalStorage(dataEntered);
    //console.log(readData);
    if (dataEntered == false) {
        msg.innerHTML = `<h3 style="color:yellow;" >Please Enter Detail</h3>`
    }
    else {
   if (row == null) {
        insert(readData);
        msg.innerHTML = `<h3 style="color:green;" >Data Inserted!</h3>`;
    }
    else {
        update();
        msg.innerHTML = `<h3 style="color:teal;" >Data Updated</h3>`;
    }
    }
    
     document.getElementById("form").reset();
       
}
// CREATE
// retriving data from form;
function retriveData() {
    var name1 = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var exp = document.getElementById("exp").value;

    var arr = [name1, job, exp];
    if (arr.includes("")) {
        return false;
    } else {
        return arr;
    }
}

// READ
// data in localStorege;
function readingDataFromLocalStorage(dataEntered) {
//Storing data in local storge;
    var n = localStorage.setItem("Name", dataEntered[0]);
    var j = localStorage.setItem("Job", dataEntered[1]);
    var e = localStorage.setItem("Experience", dataEntered[2]);

// getting values from local to table;
    var n1 = localStorage.getItem("Name", n);
    var j1 = localStorage.getItem("Job", j);
    var e1 = localStorage.getItem("Experience", e);

    var arr = [n1, j1, e1];
    return arr;
}

//INSERT
function insert(readData) {
    var row = table.insertRow();
     row.insertCell(0).innerHTML = readData[0];
     row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button>
    <button onclick = remove(this)>Delete</button>`;
    
}

// EDIT
// here we use paremeter(td) in below for fetching the row
function edit(td) {
    // yeha 2 bar parentElement likh rhe hai ku hi hami row mai jana hai
    // 1st parentElement for colum(td) and 2nd prentelemnt goes to row(tr)
    // td => tr means goes bottom to top;
     row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
}

//UPDATE
function update() {
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;

    row = null;
}

// DELETE
function remove(td) {
    // here confirm is also function;
    var ans = confirm("are you sure want to delete?")
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        // for deleting perticular row we use .deleteRow function not .remove;
    }
 }