define(["jquery"],function(e){e(document).on("click","a",function(t){var n=e(t.currentTarget),r=n.attr("href");if(r.indexOf("#")===0){t.preventDefault();var i=e(r);if(i.length===0){console.log('Anchor "'+r+'" not found.');return}var s=i.offset().top;e("html, body").animate({scrollTop:s},500)}})})