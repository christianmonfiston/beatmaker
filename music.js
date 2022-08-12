let musicBtn= document.getElementById("musicBtn")
const loop = new Tone.Loop(repeat, "8n").start(0);
let index=0;

musicBtn.onclick= function(){
    if(musicBtn.innerHTML=="Play"){
        musicBtn.innerHTML="Stop"
        Tone.Transport.start();
    }
    else{
        musicBtn.innerHTML="Play"
        Tone.Transport.stop();
    }
}

function repeat(){
    const sound1 = new Tone.Player("Samples/clap-808.wav").toDestination();
    const sound1CurrNote= "s1n"+((index%8)+1)
    if(document.getElementById(sound1CurrNote).checked){
        sound1.autostart = true;
    }

    const sound2= new Tone.Player("Samples/kick-zapper.wav").toDestination()
    const sound2CurrNote= "s2n"+((index%8)+1)
    if(document.getElementById(sound2CurrNote).checked){
        sound2.autostart=true;
    }
    index++;


    const sound3= new Tone.Player("Samples/tom-808.wav").toDestination()
    const sound3CurrNote= "s3n"+((index%8)+1)
     if  (document.getElementById(sound3CurrNote).checked){
        sound3.autostart=true;
    }

    index +=2;
   
    
    const sound4= new Tone.Player("Samples/kick-tape.wav").toDestination()
    const sound4CurrNote= "s4n"+((index%8)+1)
     if  (document.getElementById(sound4CurrNote).checked){
        sound4.autostart=true;
    }
    index +=3;
   

    const sound5= new Tone.Player("Samples/hihat-ring.wav").toDestination()
    const sound5CurrNote= "s5n"+((index%8)+1)
     if  (document.getElementById(sound5CurrNote).checked){
        sound5.autostart=true;
    }
    index +=4;

    const sound6= new Tone.Player("Samples/snare-acoustic01.wav").toDestination()
    const sound6CurrNote= "s6n"+((index%8)+1)
     if  (document.getElementById(sound6CurrNote).checked){
        sound6.autostart=true;
    }

    index +=5;
    

    



}