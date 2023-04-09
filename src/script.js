let male = "No";
let female = "No";
let telephone = "No";
let tablet = "No";
let pc = "No";
let laptop = "No";

let _name;
let email;
let password;

let error = {
    c0: "enter details", 
    c1: "length of name will be more then 3",
    c2: "length of password will be more then 8",
    c3: "email will have '@'",
    c4: "password will have big and little letters and numbers",
    c5: "password will have numbers"
}

let errorMess;

const alphabetUp = [
    "A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L",
    "M", 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z',]

const alphabetDown = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z']

const nums = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]

function Check () {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;

    let nameEl = document.querySelector("#name");
    _name = nameEl.value;

    let passwordEl = document.querySelector("#password");
    password = passwordEl.value;

    let emailEl = document.querySelector("#email");
    email = emailEl.value;

    // free space
    if (_name !== "" && email !== "" && password !== "" && male !== female) {
        c0 = true;
    } else {
        c0 = false;
    }

    //name.length
    if (_name.length >= 3) {
        c1 = true;
    } else {
        c1 = false;
    }

    //pass.length
    if (password.length >= 8) {
        c2 = true;
    } else {
        c2 = false;
    }
    
    //@
    if (email.includes("@")) {
        c3 = true;
    } else {
        c3 = false;
    }

    //pass letter
    for (let i = 0; i < alphabetUp.length; i++) {
        if (password.includes(alphabetUp[i])) {
            c4 = true;
        } else {
            c4 = false;
        }
        if (password.includes(alphabetDown[i])) {
            c5 = true;
        } else {
            c5 = false;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (password.includes(nums[i])) {
            c6 = true;
        } else {
            c6 = false;
        }
    }
    
        if (c0 === true && c1 === true && c2 === true && c3 === true && c4 === true && c5 === true && c6 === true) {
            return true;
        } else if (c0 === false) {
            errorMess = error.c0;
            return false;
        } else if (c1 === false) {
            errorMess = error.c1;
            return false;
        } else if (c2 === false) {
            errorMess = error.c2;
            return false;
        } else if (c3 === false) {
            errorMess = error.c3;
            return false;
        } else if (c4 === false && c5 == false) {
            errorMess = error.c4;
            return false;
        } else if (c6 === false) {
            errorMess = error.c5;
            return false;
        }
}

function Male () {
    if (female == "No") {
        male = "Yes";
    } else {
        male = "No";
    }
}

function Female () {
    if (male == "No") {
        female = "Yes";
    } else {
        female = "No";
    }
}

function Telephone () {
    if (telephone == "No") {
        telephone = "Yes";
    } else {
        telephone = "No";
    }
}

function Tablet () {
    if (tablet == "No") {
        tablet = "Yes";
    } else {
        tablet = "No";
    }
}

function Pc () {
    if (pc == "No") {
        pc = "Yes";
    } else {
        pc = "No";
    }
}

function Laptop () {
    if (laptop == "No") {
        laptop = "Yes";
    } else {
        laptop = "No";
    }
}

function Submiting () {
    Check();

    let nameEl = document.querySelector("#name");
    _name = nameEl.value;

    let passwordEl = document.querySelector("#password");
    password = passwordEl.value;

    let emailEl = document.querySelector("#email");
    email = emailEl.value;

    const element1 = (<div>
        <p>{errorMess}</p>
    </div>)

const app1 = document.querySelector(".jswork1");

    const element2 = (<div>
            <p>name: {_name}</p>
            <p>password: {password}</p>
            <p>e-mail: {email}</p>
            <p>male: {male}</p>
            <p>female: {female}</p>
            <p>telephone: {telephone}</p>
            <p>tablet: {tablet}</p>
            <p>computer: {pc}</p>
            <p>laptop: {laptop}</p>
        </div>)

    const app2 = document.querySelector(".jswork2");
    
    if (Check()) {
        ReactDOM.render(element2, app2);
    } else {
        ReactDOM.render(element1, app1);
    }
}