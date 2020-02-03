/* Author: 

*/
document.getElementById("submit").addEventListener("click",checkEmpty);
document.getElementById("cancel").addEventListener("click",clearBox);

// check whether the fieds are empty or not
 var gData;
function checkEmpty(e){
    e.preventDefault();
    debugger;

    var gen_checked = document.querySelector('input[name = "gender"]:checked');
    if(gen_checked !== null){    
        gData = gen_checked.value ;
    }

    if(fname.value == ""){
        alert('Please Enter Your First Name');
    }
    else if(lname.value == ""){
        alert('Please Enter Your Last Name');
    }
    else if(gData == null){
        alert('Select Gender');
    }
    else if(address.value == ""){
        alert('Please Enter Your Address');
    }
    else if(tc.checked == false){
        alert('Please Select Checkbox');
    }
    else{
        alert('Thank You');
        store();
        clearBox();
        display();
    }
}

// reset form function

var userArray = [];
function store(){
    debugger; 
    console.log(userArray.length);
    var userData = {
        f_name: document.querySelector('#fname').value,
        l_name: document.querySelector('#lname').value,
        gender: gData,
        address: document.querySelector('#address').value   
    };
    userArray.push(userData);
    console.log(userArray);
    console.log(userArray.length);
}

function clearBox(){
    document.getElementById('form_submission').reset();
}

function display() {
    debugger;
    console.log(userArray.length);
    var ulRow = document.createElement("ul");
    for (var i in userArray[userArray.length-1]){
        var liData = document.createElement("li");
        liData.textContent = (userArray[userArray.length-1][i]);
        ulRow.appendChild(liData);
    }

    var editButton = document.createElement("button")
    editButton.innerHTML = "Edit";
    ulRow.append(editButton);
    editButton.addEventListener("click",editLi);

    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete";
    ulRow.append(deleteButton);
    deleteButton.addEventListener("click",deleteLi);

    var user = document.querySelector('.table');
    user.appendChild(ulRow);

    function editLi(){
        debugger;
        var temp = [];
        for (var i in userArray[userArray.length-1]){
            temp.push(userArray[userArray.length-1][i]);           
        }
        fname.value = temp[0];
        lname.value = temp[1];
        if(temp[2] == "male"){
            document.querySelector("#male").checked = true;
        }
        else{
            document.querySelector("#female").checked = true; 
        }
        address.value = temp[3];        
    }

    function deleteLi(){
        user.removeChild(ulRow);
    }
}