let siliguri=document.getElementById('siliguri')
let dhupguri=document.getElementById('dhupguri')
let birpara=document.getElementById('birpara')
let companyaddress=document.getElementById('companyaddress')
let companycontact=document.getElementById('companycontact')
let companyemail=document.getElementById('companyemail')
let appointmentbutton=document.getElementById('appointmentbutton')
let date1=document.getElementById('date1')
let date2=document.getElementById('date2')
let date3=document.getElementById('date3')
let date4=document.getElementById('date4')
let date5=document.getElementById('date5');



function siligurijs() {
    siliguri.style.backgroundColor='red';
    dhupguri.style.backgroundColor='blue';
    birpara.style.backgroundColor='blue';
    companyaddress.innerHTML='Balaji Healthcare, P.C Mittal Bus Terminus, 2nd Mile, Sevoke Road, Siliguri 734001, West Bengal'
    companycontact.innerHTML='+91 9771442963'
    companyemail.innerHTML='rishukumar2132@gmail.com'
    
}
siliguri.addEventListener('click',siligurijs)

function dhupgurijs() {
    dhupguri.style.backgroundColor='red';
    siliguri.style.backgroundColor='blue';
    birpara.style.backgroundColor='blue';
    companyaddress.innerHTML='Opp. Dhupguri High School, Dhupguri Falakata Road, Dhupguri,West Bengal '
    companycontact.innerHTML='+91 977144xx63  +91 977xxx3456 +91 977xxx6541'
    companyemail.innerHTML='rishu000kumar@gmail.com'
    
}
dhupguri.addEventListener('click',dhupgurijs)

function birparajs() {
    birpara.style.backgroundColor='red';
    siliguri.style.backgroundColor='blue';
    dhupguri.style.backgroundColor='blue';
    companyaddress.innerHTML='Balaji Healthcare, Near Kalibari, Kalibari Road, Birpara,West Bengal'
    companycontact.innerHTML='+91 877xxx3456  +91 977xxx3456  +91 777xxx3456'
    companyemail.innerHTML='rishu111kumar@gmail.com'
    
}
birpara.addEventListener('click',birparajs)


function bookappointmentwithprakash() {
    var appointmentdate=date1.value;
    var phoneno="+919771442963"
    var url="https://wa.me/"+phoneno+"?text="+"I want to book an appointment with Dr. Swayam prakash for the date of"+"%0a"+appointmentdate+"";
    window.open(url,'_blank').focus();
    
}

function bookappointmentwithrajesh1() {
    var appointmentdate=date2.value;
    var phoneno="+919771442963"
    var url="https://wa.me/"+phoneno+"?text="+"I want to book an appointment with Dr. Rajesh Nanda for the date of"+"%0a"+appointmentdate+"";
    window.open(url,'_blank').focus();
    
}

function bookappointmentwithrajesh2() {
    var appointmentdate=date3.value;
    var phoneno="+919771442963"
    var url="https://wa.me/"+phoneno+"?text="+"I want to book an appointment with Dr. Rajesh Agrawal for the date of"+"%0a"+appointmentdate+"";
    window.open(url,'_blank').focus();
    
}

function bookappointmentwithamit() {
    var appointmentdate=date4.value;
    var phoneno="+919771442963"
    var url="https://wa.me/"+phoneno+"?text="+"I want to book an appointment with Dr. Amit Agrawal for the date of"+"%0a"+appointmentdate+"";
    window.open(url,'_blank').focus();
    
}

function bookappointmentwithvishal() {
    var appointmentdate=date5.value;
    var phoneno="+919771442963"
    var url="https://wa.me/"+phoneno+"?text="+"I want to book an appointment with Dr. Vishal Golay for the date of"+"%0a"+appointmentdate+"";
    window.open(url,'_blank').focus();
    
}


function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
                                                                 
    
  document.body.innerHTML = '<h1>This website is only accessible on laptops/desktops.</h1>';
} else {
  // Allow access
  // Your website content here
}