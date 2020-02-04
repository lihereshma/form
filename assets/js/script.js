/* Author: 

*/
document.getElementById("submit").addEventListener("click",checkEmpty);
document.getElementById("cancel").addEventListener("click",clearBox);

// check whether the fieds are empty or not
var gData;
function checkEmpty(e){
    e.preventDefault();

    var gen_checked = document.querySelector('input[name = "gender"]:checked');
    if(gen_checked !== null){    
        gData = gen_checked.value ;
    }
    if(fname.value == "" || lname.value == "" || gData == null ||
    address.value == "" || tc.checked == false){
        alert('Please Fill  Up Empty Fields');
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
    console.log(userArray.length);
    var ulRow = document.createElement("ul");
    for (var i in userArray[userArray.length-1]){
        var liData = document.createElement("li");
        liData.textContent = (userArray[userArray.length-1][i]);
        ulRow.appendChild(liData);
    }

    var eLi = document.createElement("li")
    eLi.innerHTML = "<a href='#FIXME'>Edit</a>";
    eLi.addEventListener("click",editLi);
    ulRow.append(eLi);

    var dLi = document.createElement("li");
    dLi.innerHTML = "<a href='#FIXME'>Delete</a>";
    dLi.addEventListener("click",deleteLi);
    ulRow.append(dLi);

    var user = document.querySelector('.table');
    user.appendChild(ulRow);    
} 

//delete function
function deleteLi(){   
    //user.removeChilde(ulRow);
    var user = document.querySelector('.table');
    user.removeChild(this.parentNode);
}

//edit function
function editLi(){
    debugger;
    var temp = [];
    for (var i in userArray[userArray.length-1]){
        temp.push(userArray[this][i]);           
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