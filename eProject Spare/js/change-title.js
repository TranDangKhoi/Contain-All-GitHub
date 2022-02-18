 $(function () {
     var message = "Hãy quay lại với chúng tôi <3!";
     var original;

     $(window).focus(function () {
         if (original) {
             document.title = original;
         }
     }).blur(function () {
         var title = $('title').text();
         if (title != message) {
             original = title;
         }
         document.title = message;
     });
 });