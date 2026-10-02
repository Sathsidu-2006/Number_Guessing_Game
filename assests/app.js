let Random = Math.floor(Math.random()*10+1);
console.log(Random);

function btnSubmitNumber(){
    let number = document.getElementById("txtNumber").value;

    if(Random == number ){
        Swal.fire({
        title: "Congratulations! You Have successfully Guess The Number🎉",
        text: "The Random Number is "+Random,
        imageUrl: "https://media.tenor.com/L9kNtb5Ak2IAAAAM/congrats-congratulations.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
        });

    }else{
        Swal.fire({
        icon: "error",
        title: "Wrong Guessing🥲",
        text: "Let's Try Again",
        footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
    }

}