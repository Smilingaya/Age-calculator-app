//output
const result_years=document.querySelector('#years');
const result_month=document.querySelector('#month');
const result_day=document.querySelector('#days');
//errour
const day_errour=document.querySelector('.day_erour');
const month_errour=document.querySelector('.month_erour');
const year_errour=document.querySelector('.year_erour');
//inpute
const input1=document.getElementById('num1');
const input2=document.getElementById('num2');
const input3=document.getElementById('num3');
// //
const day=document.querySelector('.day');
const month=document.querySelector('.month');
const year=document.querySelector('.year');
const btn=document.querySelector('#imd');
const InputErour='this field is requied';
const input_day_errour='Must be a valid day';
const input_month_errour='Must be a valid month';
const input_year_errour='Must be a valid year';
let dat=new Date();//current  date//
let new_day=dat.getDate();//function give you the current day//
let new_month=1+dat.getMonth();//function give you the current month// 
let new_year=dat.getFullYear();//function give you the current year//
const all_month=[31,28,31,30,31,30,31,31,20,31,30,31];
function empty(){
        day.style.color="hsl(0, 100%, 67%)";
        month.style.color="hsl(0, 100%, 67%)";
        year.style.color="hsl(0, 100%, 67%)";
        input1.style.border="0.6px solid hsl(0, 100%, 67%)";
        input2.style.border="0.6px solid hsl(0, 100%, 67%)";
        input3.style.border="0.6px solid hsl(0, 100%, 67%)";
        day_errour.textContent=InputErour;
        month_errour.textContent=InputErour; 
        year_errour.textContent=InputErour;
        result_years.textContent='--';
        result_month.textContent='--';
        result_day.textContent='--';

}
function errourday(){
        day.style.color="hsl(0, 100%, 67%)";
        month.style.color="hsl(0, 100%, 67%)";
        year.style.color="hsl(0, 100%, 67%)";
        input1.style.border="0.6px solid hsl(0, 100%, 67%)";
        input2.style.border="0.6px solid hsl(0, 100%, 67%)";
        input3.style.border="0.6px solid hsl(0, 100%, 67%)";
        day_errour.textContent=input_day_errour;
        result_years.textContent='--';
        result_month.textContent='--';
        result_day.textContent='--';
    }
    function errourmonth(){
            day.style.color="hsl(0, 100%, 67%)";
            month.style.color="hsl(0, 100%, 67%)";
            year.style.color="hsl(0, 100%, 67%)";
        input1.style.border="0.6px solid hsl(0, 100%, 67%)";
        input2.style.border="0.6px solid hsl(0, 100%, 67%)";
        input3.style.border="0.6px solid hsl(0, 100%, 67%)";
        month_errour.textContent=input_month_errour;
        result_years.textContent='--';
        result_month.textContent='--';
        result_day.textContent='--';
    }
    function errouryear(){
            day.style.color="hsl(0, 100%, 67%)";
            month.style.color="hsl(0, 100%, 67%)";
            year.style.color="hsl(0, 100%, 67%)";
        input1.style.border="0.6px solid hsl(0, 100%, 67%)";
        input2.style.border="0.6px solid hsl(0, 100%, 67%)";
        input3.style.border="0.6px solid hsl(0, 100%, 67%)";
        year_errour.textContent=input_year_errour;
        result_years.textContent='--';
        result_month.textContent='--';
        result_day.textContent='--';
    }
  function calculat(){
    if( input1.value === '' && input2.value === '' && input3.value === ''){
        empty();
        return;
    }
     if (Number(input1.value)>31){
        errourday();
        return;
        }
        if(Number(input2.value)>12){
         errourmonth();
         return;
        }
        if(Number(input3.value)>new_year){
         errouryear();
         return;
        }
    if(input1.value>new_day){
        new_day=new_day+30;
        new_month=new_month-1;
    }
    if(input2.value>new_month){
        new_month=new_month+12;
        new_year =new_year-1;
    }

    result_day.textContent=new_day-input1.value;
    result_month.textContent=new_month-input2.value;
    result_years.textContent=new_year-input3.value;
    day_errour.textContent="";
    month_errour.textContent="";
    year_errour.textContent="";
    input1.style.border= "hsl(0, 1%, 44%)";
    input2.style.border=" hsl(0, 1%, 44%)";
    input3.style.border= "hsl(0, 1%, 44%)";
    day.style.color=" hsl(0, 1%, 44%)";
    month.style.color=" hsl(0, 1%, 44%)";
    year.style.color=" hsl(0, 1%, 44%)";

  }
  btn.addEventListener('click',calculat);