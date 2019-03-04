
	var tbEmployees = localStorage.getItem("tbEmployees");// Recupera os dados armazenados
    tbEmployees = JSON.parse(tbEmployees); // Converte string para objeto
    if(tbEmployees == null)
    tbEmployees = [];

	
	function AddEmployee(){
        var employee = JSON.stringify({
            Name: $("#name").val(), 
            Age: $("#age").val(), 
            BirthDay: $("#birthDay").val(), 
            PhoneNumber: $("#phone").val(), 
            RG: $("#rg").val(), 
            CPF: $("#cpf").val(), 
            Address: $("#address").val(), 
            Number: $("#number").val(), 
            City: $("#city").val(), 
            State: $("#state").val(), 
            Notes: $("#notes").val()
        });
        tbEmployees.push(employee);
        localStorage.setItem("tbEmployees", JSON.stringify(tbEmployees));
        alert("Employee Added.");
        window.location.href="employeesList.html";
    }

    function DeleteEmployee(num){
		tbEmployees.splice(num, 1);
		localStorage.setItem("tbEmployees", JSON.stringify(tbEmployees));
		alert("Employee Deleted.");
		window.location.reload();
    }

    function ListEmployee(){
    	$("#listEmployees").html(
            "<thead>"+
            "   <tr>"+
            "   <th id='nameTable'>Name</th>"+
            "   <th id='optionTable'>Option</th>"+
            "   </tr>"+
            "</thead>"+
            "<tbody>"+
            "</tbody>"
            );

        for(var i in tbEmployees){
            var employee = JSON.parse(tbEmployees[i]); 
            document.getElementById("listEmployees").innerHTML += "<tr><td>" + employee.Name+"</td>"+
            "<td>"+ 
            "<button onclick='DeleteEmployee("+i+")'>Delete</button>"+
            "<button onclick='Redirect("+i+")'>Edit</button>"+
            "</td></tr>";
        };
    }

    function Redirect(num){
    	window.location.href="index.html?indice="+num+"";
    	ShowEmployee(num);
    }

    function ShowEmployee(num){
    	var employee = JSON.parse(tbEmployees[num]);
    	$("#name").val(employee.Name);
    	$("#age").val(employee.Age);
    	
    }

    function EditEmployee(num){
    	tbEmployees[num] = JSON.stringify({
            Name: $("#name").val(), 
            Age: $("#age").val(), 
            BirthDay: $("#birthDay").val(), 
            PhoneNumber: $("#phone").val(), 
            RG: $("#rg").val(), 
            CPF: $("#cpf").val(), 
            Address: $("#address").val(), 
            Number: $("#number").val(), 
            City: $("#city").val(), 
            State: $("#state").val(), 
            Notes: $("#notes").val()
        });
        localStorage.setItem("tbEmployees", JSON.stringify(tbEmployees));
        alert("Employee edited.");
        window.location.href="employeesList.html";
    }







