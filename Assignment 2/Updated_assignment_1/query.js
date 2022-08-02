const firstNameError=document.getElementById('firstname-error');

const lastNameError=document.getElementById('lastname-error');

const emailError=document.getElementById('email-error');

const passwordError=document.getElementById('password-error');

function checkName()
{
    var name=document.getElementById('firstname').value;
    
    if(name.length===0)
    {
       
        firstNameError.innerHTML='First name is required' 
        return false
    }
    if(name.match(/^[0-9]^/))
    {
        firstNameError.innerHTML='First name should contain only letters' 
        return false  
    }
    if(!name.match(/^[A-za-z]*/))
    {
        firstNameError.innerHTML='First name should contain only letters' 
        return false    
    }
 
    essionStorage.setItem("name:-",name);
    firstNameError.innerHTML='' 
    return true

}

function checkEmail()
{
    var name=document.getElementById('email').value;
    if(name.length===0)
    {
        emailError.innerHTML='Email-id is required' 
        return false
    }
    if(!name.match(/[A-Za-z0-9._%+-]+@[a-z]+\.[a-z]{2,4}$/))
    {
        emailError.innerHTML='Email invalid' 
        return false    
    }
    emailError.innerHTML='' 
    return true

}

function checkPassword()
{
    var name=document.getElementById('password').value;
    var minNumberofChars = 8;
    var regularExpression  =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(name.length<minNumberofChars)
    {
        passwordError.innerHTML='Your password must be at least 8 characters' 
        return false
    }
     if(!regularExpression.test(name))
    {
        passwordError.innerHTML="password should contain atleast one number,uppercase,lowercase and one special character"
        return false    
    } 
    sessionStorage.setItem("passowrd:-",name);
    passwordError.innerHTML='' 
    return true

}

  
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}


const reviews = [
    {
      id: 1,
      name: "Parmil Jyani"
      ,
      job: "Agriculture sector is a good sector.",
      img:
      'http://www.designbolts.com/wp-content/uploads/2014/01/Superman-Flat-Design.png',
      text:
        " Students are eligible in the eighth semester for the placements. There are many agriculture sprayer companies that hire students according to their levels of percentage of their marks. I plan to do a job in the n agriculture sector."    },
    {
      id: 2,
      name: "Badal",
      job: "PU - College Review",
      img:
      'http://www.designbolts.com/wp-content/uploads/2014/01/Superman-Flat-Design.png',
      text:
        "The whole admission process was online we were asked to submit all the documents on jac Chandigarh website. An application fee of 2500 was charged and once the seat was allotted an initial deposit of 40k was asked for participating in further rounds. There is a reservation available but for obc its just 5%. The cut-off for the general category for the last round was about 72k in jee main."    },
    {
      id: 3,
      name: "Vishavjeet Singh",
      job: "M.E. Chemical Review in Dr. SSBUICET, Panjab University Chandigarh",
      img:
      'http://www.designbolts.com/wp-content/uploads/2014/01/Superman-Flat-Design.png',

      text:
        "I got admission through my earlier percentage. I applied through the JAC Chandigarh website. The admission process was smooth and user-friendly. Some of my friends also got admission through Gate as well. Application fees were Rs. 1000." },
    {
      id: 4,
      name: "Akshit",
      job: "Good placement scale!",
      img:
      'http://www.designbolts.com/wp-content/uploads/2014/01/Superman-Flat-Design.png',

      text:
        " The admission process is through Jossa counseling based on jee mains result. The application form is easily available on the Jac Chandigarh website and the counselling generally starts after the JEE Advanced result. "   }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  