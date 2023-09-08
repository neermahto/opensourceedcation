console.log("hello opensourceeducation.org")

let openthenav = () => {
    const threeLine = document.getElementById("threeLine");
    const list = document.getElementById("list");
    const closeThreeLine = document.getElementById("closeThreeLine");

    threeLine.addEventListener(
        'click'
        ,
        () => {
            list.style.display = "block";
        }
    );

    // close the nav 

    closeThreeLine.addEventListener(
        'click'
        ,
        () => {
            list.style.display = "none";
        }
    )
};

openthenav(); // call teh openthenav 


/* user greeting code */

const greeting = () => {
    const usernamebox = document.getElementById("usernamebox");
    const username = document.getElementById("username");
    const submitbtn = document.getElementById('submitbtn');
    const spanusername = document.getElementById("spanusername");
    submitbtn.addEventListener(
        'click'
        ,
        () => {
            if (username.value === "") {
                usernamebox.style.display = "block"
                alert("enter your name please");
            } else {
                spanusername.innerHTML = username.value;
                usernamebox.style.display = "none"
            }


        }
    )

};

greeting();


// our aim 
let ourMission = () => {
    const text = "हमारा उद्देश्य शिक्षा को सभी व्यक्तियों तक पहुंचाना है, ताकि समाज का कोई भी व्यक्ति इससे अछूता ना रहे|";
    const missionText = document.getElementById("missionText");
    let textCount = 0;
    let endValue = 1;
    let isForward = true;
    console.log(text.length)
    let textInterval = setInterval(
        () => {
            textCount++;
            missionText.textContent = text.substring(0, textCount);
            if (textCount === text.length) {
                clearInterval(textInterval);;
            };
        }
        ,
        100
    );

};


ourMission();

//here you can learn 
const learn = () => {
    let subject = [
        "Hinid",
        "English",
        "Sanskrit",
        "computer science",
        "JavaScript",
        "HTML CSS",
        "Physics",
        "Maths",
        "Chemistry",
        "Geography",
        "History",
        "Civics",
    ];


    let subjectCount = 0;
    const subName = document.getElementById("subName");

    let subjectInterval = setInterval(
        () => {
            subjectCount++;
            subName.innerText = subject[subjectCount];
            if (subjectCount === subject.length - 1) {
                subjectCount = 0;
            }
        },
        500
    )

};

learn();


// change background every 3 second 

let changeBg = () => {
    let background = document.getElementsByClassName("mission")[0];
    let img = [
        "/bgimage/img2.jpg",
        "/bgimage/img3.jpg",
        "/bgimage/img4.jpg",
        "/bgimage/img5.jpg",
        "/bgimage/img6.jpg",
        "/bgimage/img7.jpg",
        "/bgimage/img8.jpg",
        "/bgimage/img9.jpg",
        "/bgimage/img10.jpg",
    ];
    let index = 0;


     let pictureIinterval = setInterval(
        () => {
            index++;
            console.log(index); 
            console.log(img.length); 
            background.style.backgroundImage ='url("' + img[index] + '")';
            if(index===img.length-1){
                index--; 
            }; 
        }
        ,
        10000
    );



};

changeBg();