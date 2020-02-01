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
    }
}

// reset form function
function clearBox(){
    document.getElementById('form_submission').reset();
}

function store(){
    debugger;
    var userArray = [];
    var userData = {
        f_name: document.querySelector('#fname').value,
        l_name: document.querySelector('#lname').value,
        gender: gData,
        address: document.querySelector('#address').value   
    };
    userArray.push(userData);
}

