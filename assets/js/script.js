/* Author: 

*/
document.getElementById("submit").addEventListener("click",checkEmpty);
document.getElementById("cancel").addEventListener("click",clearBox);




// check whether the fieds are empty or not
function checkEmpty(e){
    e.preventDefault();

    debugger;
    var gData;
    var gen_checked = document.querySelector('input[name = "gender"]:checked');
    if(gen_checked !== null){    
        gData = gen_checked.value ;
    }

    if(fname.value == ""){
        alert('Please Enter Your First Name');
    }
    else if(lname.value == ""){
        alert('Please Enter Your First Name');
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
        clearBox();
    }
}

// reset form function
function clearBox(){
    document.getElementById('form_submission').reset();
}

var userData = {
    f_name: document.querySelector('#fname').value,
    l_name: document.querySelector('#lname').value,
    gender: gen_checked,
    address: document.querySelector('#address').value   
};