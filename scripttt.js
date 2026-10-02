const spamKeywords = ["offer", "urgent", "click", "link", "otp", "password", "win", "free", "lottery", "money"];
const checkbtn = document.getElementById("MESSAGE");
const msgInput = document.getElementById("message");

checkbtn.addEventListener("click",function(){
    let msg = msgInput.value.toLowerCase();
    let spam = spamKeywords.some(keyword => msg.includes(keyword.toLowerCase()));

    if(spam) {
        alert("This might be a spam message!");
    }
    else {
        alert("Safe Message...");
    }
});
