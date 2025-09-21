
let Save_Total_Score_BTN = document.querySelector("#Save_Total_Score_BTN");
let Load_Total_Score_BTN = document.querySelector("#Load_Total_Score_BTN");
let Total_Score_Counter_DOM = document.querySelector("#Total_Score_Counter");

let Reset_Total_Score_BTN = document.querySelector("#Reset_Total_Score_BTN");


// NO IN USE let Score_Counter_DOM = document.querySelector("#Current_Score");

let Score_Counter_Likes_DOM = document.querySelector("#Current_Score_Like");
let Score_Counter_Dislikes_DOM = document.querySelector("#Current_Score_Dislike");

let Roll_Amount_Input = document.querySelector("#Roll_Amount_Input");
let Roll_BTN = document.querySelector("#Roll_BTN");
let Add_Roll_BTN = document.querySelector("#Add_Roll_BTN");

let Final_Score = { Like: 0, Dislike: 0 };
let Current_Score = { Like: 0, Dislike: 0 };

function roundToNearestTenth(num) {
  return Math.round(num * 10) / 10;
}

function Update_Score_Counters() {
    Total_Score_Counter_DOM.innerHTML = `Total Score: Likes: ${Final_Score.Like} and Dislikes: ${Final_Score.Dislike}`;

    //Score_Counter_DOM.innerHTML = `Score: Likes: ${Current_Score.Like} and Dislikes: ${Current_Score.Dislike}`;

    let Total = Current_Score.Like + Current_Score.Dislike;

    let Like_Percentage = (Current_Score.Like / Total * 100) || 0;
    let Dislike_Percentage = (Current_Score.Dislike / Total * 100) || 0;

    Score_Counter_Likes_DOM.innerHTML = `${roundToNearestTenth(Like_Percentage)}%(${Current_Score.Like})`;
    Score_Counter_Dislikes_DOM.innerHTML = `${roundToNearestTenth(Dislike_Percentage)}%(${Current_Score.Dislike})`;

    console.log("Score Counters Updated")
}

function Load_Total_Score() {
    let Likes_Saved = parseInt(localStorage.getItem("Total_Score_Like")) || 0;
    let Dislike_Saved = parseInt(localStorage.getItem("Total_Score_Dislike")) || 0; 
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
    Update_Score_Counters()
    console.log("Deleted");
}
function Add_Current_To_Total_Score (){
    
    Final_Score.Like += Current_Score.Like;
    Final_Score.Dislike += Current_Score.Dislike;
    Current_Score.Like = 0;
    Current_Score_Dislike = 0;
    Update_Score_Counters();
    console.log("Current score added to total score");
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
    let Roll_Results = Generate_Result(Roll_Amount_Input.value || 1);
    console.log(Roll_Results);
    Current_Score.Like = Roll_Results.Like;
    Current_Score.Dislike = Roll_Results.Dislike;
    Update_Score_Counters();
}



//localStorage.setItem("Total_Score_Like", 5)
Save_Total_Score_BTN.addEventListener("click", Save_Total_Score);
//Load_Total_Score_BTN.addEventListener("click", Load_Total_Score);
Roll_BTN.addEventListener("click", Roll);
Add_Roll_BTN.addEventListener("click", Add_Current_To_Total_Score);
Reset_Total_Score_BTN.addEventListener("click", Delete_Total_Score);
Load_Total_Score();