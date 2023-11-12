window.addEventListener("load", basic, false);



function beginning () {
    game = document.getElementById("game");
    game.innerHTML = ""
    for (i=0; i<zbor.length; i++)
    {
        if(visible[i]==0)
        game.innerHTML+= '<span><input class ="letter" type = "text" id = "letter ' +i+ ' "  maxlength=1></span>';
        else
        game.innerHTML += '<span>' +zbor[i]+  '</span>'  ;
    }
    
    }
    


function basic () {
 niza = ["kniga", "tetratka", "telefon", "diploma", "kapucino"];
brojnazbor = Math.floor(Math.random()*6);
  zbor = niza[brojnazbor];
 visible = new Array(zbor.length).fill(0);

for ( i=0; i<3; i++)
{
    pom = Math.floor(Math.random()*(zbor.length+1));
    if(visible[pom]==0) {
  
    visible[pom]=1;
    }
    else{
    i--;
    }
}
beginning();
probuvanja = 0;
}

function pogodi() {
    probuvanja++;
    for( i=0; i<visible.length; i++){
        if(visible[i]==1){continue;}
       bukva = document.getElementById("letter" +i);
       input = bukva.value;
        if(input==zbor[i]){
            visible[i]=1;}
    }
    beginning();
    num=1;
    for(i=0;i<visible.length;i++){
        if(visible[i]==0){num=0; break;}
    }
    if(num==1){
    window.alert("Go pogodi zborot!");
    location.reload();}
    else if(probuvanja==5){
        odgovor = confirm("Nemash vekje probuvanja, igrata e zavrshena /n Dali sakash da probash povtorno?");
        if(odgovor)
        location.reload();
    }


}




