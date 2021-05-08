let user_score = 0;
let ai_score = 0;
const user_score_dom = document.getElementById("rps-user-score");
const ai_score_dom = document.getElementById("rps-ai-score");
const scoreboard = document.getElementById("rps-scoreboard");
const result = document.getElementById("rps-results");
const rock = document.getElementById("rps-rock");
const paper = document.getElementById("rps-paper");
const scissors = document.getElementById("rps-scissors");

function get_ai_choice() {
    const possible_choices = ['rock', 'paper', 'scissors'];
    const random_selection = Math.floor(Math.random() * 3);
    return possible_choices[random_selection];
}

function win(user_choice, ai_choice) {
    user_score++;
    user_score_dom.innerHTML = user_score;
    ai_score_dom.innerHTML = ai_score;
    result.innerHTML = `${user_choice} beats ${ai_choice} >> You win! \u{1F60F}`;

}

function lose(user_choice, ai_choice) {
    ai_score++;
    ai_score_dom.innerHTML = ai_score;
    user_score_dom.innerHTML = user_score;
    result.innerHTML = `${ai_choice} beats ${user_choice} >> You lose! \u{1F625}`; 
}

function draw() {
    user_score_dom.innerHTML = user_score;
    ai_score_dom.innerHTML = ai_score;
    result.innerHTML = "Draw \u{1F634} ";  
}

function game(user_choice ) {
    const ai_choice = get_ai_choice();
    switch (user_choice + ai_choice) {
        // user wins
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(user_choice, ai_choice);
            break;
        
        // user loses
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(user_choice, ai_choice);
            break;
        
        // user draws
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(user_choice, ai_choice);
            break;
    }
}

function main_gameplay() {
    rock.addEventListener('click', function() {
        game("rock");
    })
    
    paper.addEventListener('click', function() {
        game("paper");
    })
    
    scissors.addEventListener('click', function() {
        game("scissors");
    })
}

main_gameplay()