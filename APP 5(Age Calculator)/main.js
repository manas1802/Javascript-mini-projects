let form= document.getElementById("form");
let dobInput=document.getElementById("dob-input");
let result=document.getElementById("result");
dobInput.max = new Date().toISOString().split("T")[0];


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let birthdate=new Date(dobInput.value);

    let date1= birthdate.getDate();
    let month1=birthdate.getMonth()+1;
    let year1=birthdate.getFullYear();

    let today=new Date()
    let diff=today-birthdate;
    let date2= today.getDate();
    let month2=today.getMonth()+1;
    let year2=today.getFullYear();

    let d3, y3, m3;

    y3= year2-year1
    console.log(y3)

    if(month2>month1){
        m3=month2-month1;
    }
    else{
        y3--;
        m3=12+month2-month1;
    }

    if(date2>date1)
    {
        d3=date2-date1;
    }
    else{
        m3--;
    d3 = getDaysInMonth(year1, month1) + date2 - date1;
    }
    
    console.log(y3 , m3 , d3)
    dobInput.value = "";
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;

})

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }