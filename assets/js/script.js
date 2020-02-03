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
    var ulNode = document.createElement("ul");
    for (var i in userArray[userArray.length-1]){
        var liNode = document.createElement("li");
        liNode.textContent = (userArray[userArray.length-1][i]);
        ulNode.appendChild(liNode);
    }

    var editButton = document.createElement("button")
    editButton.innerHTML = "Edit";
    ulNode.append(editButton);
    editButton.addEventListener("click",editLi);

    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete";
    ulNode.append(deleteButton);
    deleteButton.addEventListener("click",deleteLi);

    var user = document.querySelector('.table');
    user.appendChild(ulNode);

    function editLi(){
       var items = document.querySelectorAll('#list li');
    }

    function deleteLi(){
        user.removeChild(ulNode);
    }
}


