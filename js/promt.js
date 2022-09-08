function gotAlert() {
    let num = Math.random() * 10;
    if (num < 5) {
        alert(num);
    } else {
        console.log(`${num} is greater than 5`);
    }
}

let giveDecision = () => {
    let decision = confirm("Are you going to their party?");
    console.log(decision);
    if (decision === true) {
        alert("Please taking me with you in this party...!");
    } else {
        alert("Oh.. we are same bro.. Chill");
    }
};

let takeInput = () => {
    let promt = prompt("Plese Send Your Full Name ");
    console.log(promt);
    if (!!promt) {
        alert(`Hi..${promt}`);
    } else {
        console.log("Not given");
    }
};