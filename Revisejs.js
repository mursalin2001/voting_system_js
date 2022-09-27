let votters =[{
    Name : "Tamim Iqbal",
    FName : "Iqbal Khan",
    MName : "Nusrat Iqbal",
    Pcode : 8621,     
    NID: 1234567891
}, {
        Name : "Shakib Al Hasan",
        FName : "Khondokar Masroor Reza",
        MName : "Shirin Reza",
        Pcode : 8621,
        NID: 1234567892
},{
        Name : "Mushfiqur Rahim",
        FName : "Mahbub Habib",
        MName : "Rahima Khatun",
        Pcode : 8621,
        NID: 1234567893
},{
        Name : "Mahmudullah Riad",
        FName : "Mohammad Obaidullah Nabab",
        MName : "Arafat Begum",
        Pcode : 8621,
        NID: 1234567894,
}, {
            Name : "Mashrafi Bin Mortuza",
            FName : "MD Nurul Amin",
            MName : "MOST Morsheda Begum",
            Pcode : 8621,
            NID: 1234567895
        },{
            Name : "Afif Hossain",
            FName : "Unknown",
            MName : "Unknown",
            Pcode : 8621,
            NID: 1234567896
        }];

//   export {votters as voterInfo}
// get voter information start


var VotersImages = ["images/Tamim-removebg-preview.png", "images/Shakib_al_Hasan-removebg-preview.png","images/mushfiqur_rahim-removebg-preview.png","images/Mahmudullah-Profile-removebg-preview.png" , "images/Mashrafi-removebg-preview.png","images/Afif-Hossain-Dhrubo-removebg-preview.png"];
let votarName = document.getElementById("VName");
let VFName = document.getElementById("VFName");
let VMName = document.getElementById("VMName");
let VBD = document.getElementById("VBD");
let VID = document.getElementById("VID");
var Vimage = document.getElementById("Vimg");
                    
let voterError = document.getElementById("voter");
let checkUName, checkFName, checkMName, chceckPost, checkNID;
let uName = document.getElementById("Uname");
let fName = document.getElementById("FName");
let mName = document.getElementById("MName");
let post = document.getElementById("post");
const nid = document.getElementById("nid");
let serialNo = document.getElementById("serial");


// function display(callme = 0)
// {
//     Vimage.src = VotersImages[callme];
//     votarName.innerHTML = votters[callme].Name;
//     VFName.innerHTML = votters[callme].FName;
//     VMName.innerHTML = votters[callme].MName;
//     VID.innerHTML = votters[callme].NID;
// }     
    
// display(1);
// get voter information end
let admin = document.getElementById("vis");
let user = document.getElementById("vooterLoginForm");
let a =0,b = 1;
function showAdmin()
{
    if(a == 0)
    {
        admin.style.display = "inline";
        user.style.display = "none";
        return a = 1;
    }
    else{
        admin.style.display = "none";
        return a = 0;
    }
}
function showUser()
{
    if(b == 1)
    {
    user.style.display = "inline";
    admin.style.display = "none";
    return b = 0;
    }
    else{
        user.style.display = "none";
        return b = 1;
    }
}

// HTML DESIGN PART END 

// form validition start 

let adminId = document.getElementById("adminId");
let adminPass = document.getElementById("adminPassword");
let pass = document.getElementById("pass");
function onsub()
{
    if("123456789" != adminId.value ||  "1234" != adminPass.value )
    {
        adminId.value="";
        adminPass.value="";
        pass.innerHTML="sorry, invalid id or password";
        return false;
    }
}


// admin part end
       


        // const queryString = window.location.search;
        // console.log(queryString);
        // const urlParams = new URLSearchParams(queryString);
        // const product = urlParams.get('NID');
        // console.log(product);


        let formEl = document.querySelector('#vooterLoginForm');
        if(formEl){
            formEl.addEventListener('submit',(event)=>{
                event.preventDefault();
                const formData = new FormData(formEl);
                window.console.log('log form data',formData,serialNo.value);
            })
        }
        

        
        function subUsers(event)
        {
            console.log('before prevent default',event,serialNo.value)
            event.preventDefault();
            if(serialNo.value < 0 || serialNo.value > 5)
            {
                voterError.innerHTML ="Wrong information! Try again with correct one";
                return false;
            }
                 
            let i = serialNo.value;
            checkUName = votters[i].Name;
            checkFName = votters[i].FName;
            checkMName = votters[i].MName;
            chceckPost = votters[i].Pcode;
            checkNID = votters[i].NID;
            
            console.log(i);
            if(uName.value != checkUName || fName.value != checkFName || mName.value != checkMName || post.value != chceckPost || nid.value != checkNID)
            {
                uName.value = "";
                fName.value = "";
                mName.value = "";
                voterError.innerHTML ="Wrong information! Try again with correct one";
                return false;
            }

            console.log(serialNo.value)

            window.location.href = 'userInterface.html?nid=' + serialNo.value;
           
        }
        
//    User Verification end

// Voter Verification by Presiding officer start

