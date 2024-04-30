
let pos1 = document.getElementById("g1");
let pos2 = document.getElementById("g2");
let pos3 = document.getElementById("g3");
let pos4 = document.getElementById("g4");
let pos5 = document.getElementById("g5");
let pos6 = document.getElementById("g6");
let pos7 = document.getElementById("g7");
let pos8 = document.getElementById("g8");
let pos9 = document.getElementById("g9");
let info = document.getElementById("info")
let reset= document.getElementById("reset")

let state= false
current_player = "X"
info.innerHTML = "CURRENT PLAYER: "+current_player

function check_gamestate() {    
    if (
        ((pos1.innerHTML == pos2.innerHTML) && (pos2.innerHTML == pos3.innerHTML) && (pos2.innerHTML != '')) ||
        ((pos4.innerHTML == pos5.innerHTML) && (pos5.innerHTML == pos6.innerHTML) && (pos5.innerHTML != '')) ||
        ((pos7.innerHTML == pos8.innerHTML) && (pos8.innerHTML == pos9.innerHTML) && (pos8.innerHTML != '')) ||
        ((pos1.innerHTML == pos4.innerHTML) && (pos4.innerHTML == pos7.innerHTML) && (pos4.innerHTML != '')) ||
        ((pos2.innerHTML == pos5.innerHTML) && (pos5.innerHTML == pos8.innerHTML) && (pos5.innerHTML != '')) ||
        ((pos3.innerHTML == pos6.innerHTML) && (pos6.innerHTML == pos9.innerHTML) && (pos6.innerHTML != '')) ||
        ((pos1.innerHTML == pos5.innerHTML) && (pos5.innerHTML == pos9.innerHTML) && (pos5.innerHTML != '')) ||
        ((pos3.innerHTML == pos5.innerHTML) && (pos5.innerHTML == pos7.innerHTML) && (pos5.innerHTML != ''))
    ) {
        info.innerHTML = `${current_player} WON THE GAME!!!`
        return true
    }
    else if (
    pos1.innerHTML != '' && pos2.innerHTML != '' && pos3.innerHTML != '' &&
    pos4.innerHTML != '' && pos5.innerHTML != '' && pos6.innerHTML != '' &&
    pos7.innerHTML != '' && pos8.innerHTML != '' && pos9.innerHTML != '' ){
        info.innerHTML = "ITS A DRAW!!!"
        return true
    }
}

let switch_player = () => current_player == "X" ? current_player = "O" : current_player = "X"


pos1.onclick = pos2.onclick = pos3.onclick = 
pos4.onclick = pos5.onclick = pos6.onclick = 
pos7.onclick = pos8.onclick = pos9.onclick = 

function(){
    if (this.innerHTML == "" && state != true){
        this.innerHTML = current_player
    }
    else{
        switch_player()
    }
    
    state = check_gamestate()
    switch_player()
    if (state != true){
        info.innerHTML = "CURRENT PLAYER: " + current_player
    }  

}

reset.onclick = function(){
    current_player = "X"
    info.innerHTML = "CURRENT PLAYER: "+current_player
    state = false

    pos1.innerHTML = pos2.innerHTML = pos3.innerHTML = 
    pos4.innerHTML = pos5.innerHTML = pos6.innerHTML = 
    pos7.innerHTML = pos8.innerHTML = pos9.innerHTML =
    ""
}
