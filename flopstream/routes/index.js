////////////////////////////////////////////////////////////////////////////////
//                 Mason SRCT: FlopStream Main App Routes
// - This routing file describes the main front-end's routing.
// - This serves the root page as well as parses preset url's generated by the
//   application
////////////////////////////////////////////////////////////////////////////////
var express = require('express');
var router = express.Router();
var robot = require('robotjs');
require('shelljs/global');

// Load site wide configurations
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { config });
})

var startPlay = function() {
    t.setMouseDelay(30);

    //Move to Load Sequence Button
    robot.moveMouse(450,185);
    robot.mouseClick();

    // Move to Home Button
    robot.moveMouse(435,132);
    robot.mouseClick();

    // Move to Desktop and select
    robot.moveMouse(70,237);
    robot.mouseClick('left',true);

    // Move to text box and enter new text
    robot.moveMouse(217,337);
    robot.mouseClick();
    robot.keyToggle('control', 'down');
    robot.keyTap('A');
    robot.keyToggle('control', 'up');
    robot.typeString('temp.mid');
    robot.keyTap('enter');

    // Move to Ok button
    robot.moveMouse(400,410);
    robot.mouseClick();

    // Move to play button
    robot.moveMouse(365,245);
    robot.mouseClick();

    cd('/home/mstengle/Desktop');

    var command = 'cvlc v4l2:// :input-slave=alsa:// :v4l-vdev="/dev/video0" :v4l-norm=3 :v4l-frequency=-1 :v4l-caching=300 :v4l-chroma="" :v4l-fps=-1.000000 :v4l-samplerate=44100 :v4l-channel=0 :v4l-tuner=-1 :v4l-audio=-1 :v4l-stereo :v4l-width=480 :v4l-height=360 :v4l-brightness=-1 :v4l-colour=-1 :v4l-hue=-1 :v4l-contrast=-1 :no-v4l-mjpeg :v4l-decimation=1 :v4l-quality=100 --sout="#transcode{vcodec=theo,vb=2000,fps=40,scale=0.67,acodec=vorb,ab=90,channels=1,samplerate=44100}:standard{access=file,mux=ogg,dst=output.ogg}"';


    console.log('before');
    exec('screen -dmS test ' + command,{async:true,silent:true});

    exec('sleep 1');
    console.log(robot.getPixelColor(446,297));

    while(robot.getPixelColor(446,297) == "eeeeee") {
    exec("sleep .5");
}

exec("screen -ls | grep Detached | cut -d. -f1 | awk '{print $1}' | xargs kill");
console.log('killed');
    // }

}

router.post('/upload', function(req, res) {
    var sampleFile;

    if (!req.files) {
        res.redirect('/404');
        return;
    }

    sampleFile = req.files.sampleFile;
    sampleFile.mv(config.saveLocation, function(err) {
        if (err) {
            res.redirect('/500');
        }
        else {
            config.onePage.stepOne = false;
            config.onePage.stepTwo = true;
            config.onePage.stepThree = false;

            res.redirect('/');
            startPlay();
        }
    });
});

router.post('/upload2', function(req, res) {
    config.onePage.stepOne = false;
    config.onePage.stepTwo = false;
    config.onePage.stepThree = true;

    res.redirect('/');
    return;
})

module.exports = router;
