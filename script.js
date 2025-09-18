
let Save_Total_Score_BTN = document.querySelector("#Save_Total_Score_BTN");
let Load_Total_Score_BTN = document.querySelector("#Load_Total_Score_BTN");
let Total_Score_Counter_DOM = document.querySelector("#Total_Score_Counter");
let Score_Counter_DOM = document.querySelector("#Current_Score");
let Roll_Amount_Input = document.querySelector("#Roll_Amount_Input");
let Roll_BTN = document.querySelector("#Roll_BTN");

let Final_Score = { Like: 0, Dislike: 0 };
let Current_Score = { Like: 0, Dislike: 0 };



function Update_Score_Counters() {
    Total_Score_Counter_DOM.innerHTML = `Total Score: Likes: ${Final_Score.Like} and Dislikes: ${Final_Score.Dislike}`;

    Score_Counter_DOM.innerHTML = `Score: Likes: ${Current_Score.Like} and Dislikes: ${Current_Score.Dislike}`;
}

function Load_Total_Score() {
    let Likes_Saved = localStorage.getItem("Total_Score_Like") || 0;
    let Dislike_Saved = localStorage.getItem("Total_Score_Dislike") || 0; 
    Final_Score.Like = Likes_Saved;
    Final_Score.Dislike = Dislike_Saved;

    if (Likes_Saved == 0 || Dislike_Saved == 0) {
        console.log("One of scores not found");
    } else {
     console.log("Score loaded");
    }
    Update_Score_Counters();
}
function Save_Total_Score() {
    localStorage.setItem("Total_Score_Like", Final_Score.Like);
    localStorage.setItem("Total_Score_Dislike", Final_Score.Dislike);
    console.log("Saved");
}

function Delete_Total_Score (){
    Final_Score.Like = 0;
    Final_Score.Dislike = 0;
    console.log("Deleted");
}
function Add_Total_Score (Like, Dislike){
    Final_Score.Like += Like;
    Final_Score.Dislike += Dislike;
}

function Generate_Result(Amount){
    let Times = Amount || 1;
    let Results = { Like: 0, Dislike: 0};

    for (i = 1; i <= Times; i++){
        let Random_Number = Math.floor(Math.random() * 100);
        if (Random_Number > 50){
            console.log("Like");
            Results.Like = Results.Like + 1;
        } else if (Random_Number < 50) {
            console.log("Dislike");
            Results.Dislike = Results.Dislike + 1;
        }
    }
    return Results;
}

function Roll(){
    console.log("T")
    let Roll_Results = Generate_Result(5);
    console.log(Roll_Results)
    Current_Score.Like = Roll_Results.Like;
    Current_Score.Dislike = Roll_Results.Dislike;
    Update_Score_Counters();

}


//localStorage.setItem("Total_Score_Like", 5)
Save_Total_Score_BTN.addEventListener("click", Save_Total_Score);
Load_Total_Score_BTN.addEventListener("click", Load_Total_Score);
Roll_BTN.addEventListener("Click", Roll);