# flopstream

flopstream is a website that exists to allow those who do not have musical floppy drives to experience their compositions in retro. By uploading a midi file to the site, it will be played, recorded, and uploaded to youtube for anyone to see.

## Goals

The main goal for this project was for it to be functional, and actually allow the hardware to talk effectively with both the web server as well as the youtube api. The application needed to be simple to use while having the features underground tho let us accomplish the task at hand.

## Challenges

There were many different challenges that we faced while working on this project which served to help us learn more about how to solve the very problems. Using the express.js framework on NPM turned out to be extraordinarily helpful, as many issues has been at least partially solved already.

### Hardware To PC

Getting the hardware to talk to the PC was difficult because the Arduino communicates with a Java Swing application. With a minimal amount of time available to us, we ended up using the `robotjs` package to have our program control the mouse, and therefore the drives. This solution reminded me strongly of AutoHotkey, and proved to be an entertaining bodge.

### Recording the Drives

To actually record the drives, we planned initially to use a raspberry pi camera, but found that MLH didn't have any for use to use. Our backup ended up being my laptop's webcam, which presented an interesting challenge to get both the video and audio recorded from a command line application. The eventual solution became to use VLC Media Player's command line interface in what was a _very_ long command.

This, and many other instances of external Linux commands in this project were accomplished using `shelljs`, which make's it very easy to run commands and retrieve their output.

### Uploading to YouTube

Uploading to YouTube ended up being as simple as calling a free command line application. After caching the o-oath token, the process is seamless and provides the url back to the express application for insertion into the page.

## Moving Parts

Getting all of the different parts of this project moving and working together turned out to be a very challenging and rewarding experience. I ended up working on the majority of all the back end work for making the application work, while David spent most of the time crafting the user interface so that it would be easy and simple to submit a file and get a YouTube link back. About half of our time was spent working on the individual parts of the project, while the rest was spent integrating it all together, and we finished with more than 6 hours left to sleep before the exposition!

## In conclusion...

This was a very fun project to work on as a team, and one that served to get both of us much more acquainted with both node.js as well as express. For me in particular, this is important to my other projects using JavaScript, as I am still growing my knowledge base to use in other extracurricular projects such as [schedules](https://git.gmu.edu/srct/schedules).

#### Developed by @ocelotsloth & @bruno207 at Hack UMBC 2016
