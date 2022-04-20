$(document).ready(function(){
    //countdown

    $('#getting-started').countdown('2022/05/10', function(event) {
        // $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
        $(this).html(event.strftime('<div><span>%D</span><span>Days</span></div><div><span>%H</span><span>Hours</span></div><div><span>%M</span><span>Minutes</span></div><div><span>%S</span><span>Seconds</span></div>'));
      });
});

