
      function data(event){
    
      console.log("Function executed");
      event.preventDefault();
      var  a = document.getElementById("student_name").value;
        var b =document.getElementById("student_id").value;
        var c= document.getElementById("student_email_id").value;
        var d = document.getElementById("student_contact_no").value;
  
        if(a=="" ||b==""||c==""||d=="")
        {
          alert("All Fields are mandatory");
          return;
        }
  
      
      // Get the table
      var table = document.getElementById("registered_Students_Table");
     
  // Insert a new row at the end of the table
  var newRow = table.insertRow();

  
  // Insert new cells in the row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  
  // Populate cells with content
  cell1.innerHTML = a;
  cell2.innerHTML = b;
  cell3.innerHTML = c;
  cell4.innerHTML = d;
  
  cell1.contentEditable ="true";
  cell2.contentEditable ="true";
  cell3.contentEditable ="true";
  cell4.contentEditable ="true";
  
  cell5.innerHTML = '<button onclick ="deleteRow(this)".style.fontsize="2px">Delete</button>';
  // Reset the form fields
  document.getElementById("student_name").value = "";
  document.getElementById("student_id").value = "";
  document.getElementById("student_email_id").value = "";
  document.getElementById("student_contact_no").value = "";

  localStorage.setItem("student_name",a);
  localStorage.setItem("student_id",b);
  localStorage.setItem("student_email_id",c);
  localStorage.setItem("student_contact_no",d);


      }
  function deleteRow(button){
    //Find the row containing the button and remove it
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
    
    