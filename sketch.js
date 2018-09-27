var song;
var button;

function preload() {
    song = loadSound("youwannago.wav");
}


function setup() {
    //song.play();
    button = createButton("Try Me");
    button.mousePressed(TogglePlayback);

}

function TogglePlayback()
{
    song.play();
}
