class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}
const new_video = new Video("Punching a Stranger in the Face Prank -- It didn't Go as Planned ...", 'BillyThePrankster', 45);
new_video.watch();
const new_video2 = new Video("BillyThePrankster's Decadence: What's Behind his Lackluster Punching Videos, and how to Improve Them", 'JohnnyTheBigTimePrankster', 3600);
new_video2.watch();