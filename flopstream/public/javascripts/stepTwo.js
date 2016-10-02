var $progress = $('.progress');
var $progressBar = $('.progress-bar');
var $alert = $('.alert');

setTimeout(function() {
    var ans = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
    $progressBar.css('width', '' + ans + '%');
    $progressBar.append('' + ans + '%');
    setTimeout(function() {
        var ans2 = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
        $progressBar.css('width', '' + ans2 + '%');
        $progressBar.empty();
        $progressBar.append('' + ans2 + '%');
        setTimeout(function() {
            var ans3 = Math.floor(Math.random() * (75 - 50 + 1)) + 50;
            $progressBar.css('width', '' + ans3 + '%');
            $progressBar.empty();
            $progressBar.append('' + ans3 + '%');
            setTimeout(function() {
              $progressBar.css('width', '100%');
              $progressBar.empty();
              $progressBar.append('100%');
              setTimeout(function() {
                  $progress.css('display', 'none');
                  $alert.css('display', 'block');
                  $('#upload2').css('display', 'block');
              }, 1000);
            }, 500); // WAIT 5 milliseconds
        }, 2000); // WAIT 2 seconds
    }, 1000); // WAIT 1 seconds
}, 1000); // WAIT 1 second
