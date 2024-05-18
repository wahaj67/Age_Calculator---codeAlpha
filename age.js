function calculateAge(){
    let dob = document.getElementById("dob").value;
    let dobDate =new Date (dob);
    let todayDate = new Date ();
    let age= todayDate.getFullYear()-dobDate.getFullYear(); 

    if(todayDate.getMonth()< dobDate.getMonth() || (todayDate.getMonth() === dobDate.getMonth() && todayDate.getDate()< dobDate.getDate())){
        age--; 
    }

    document.getElementById("age").innerText =  age;
    
    




}