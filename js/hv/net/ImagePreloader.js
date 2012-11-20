/*
 *
 *  ImagePreloader
 *
 *  Can preload images based on a simple array of URL's or a collection
 *  of jQuery Objects.
 *
 *  Usages:
 *
 *  ImagePreloader( arr || jquery object(s) , callbackAll(), singleCallaback());
 *
 *  Example:
 *
 *  var preloader = new ImagePreloader($("img"),function(){
 *     alert("all images are loaded");
 *  }, function(){
 *     alert("image Nr: " + $(this).index() + " is loaded");
 *  });
 *
 *  Todo: avoid this imageTOJquery function... (Remove Jquery dependences)
 *
 */

define(["jquery"],function() {

  var ImagePreloader, imageToJquery;

  imageToJquery = function( images ) {
    var imageHtml;

    if (typeof images === "object") {
      for(var image in images){
        imageHtml += "<img src='" + images[image] + "'/>";
      }
    }else if(typeof images === "string"){
      imageHtml = "<img src='" + images + "'/>";
    }

    return $(imageHtml);
  };

  ImagePreloader = function( images,callbackAll,callbackSingle ){
    var totalCallbacks, $images, imageLoaded;

    $images = images instanceof jQuery ? images : imageToJquery( images );

    totalCallbacks = $images.length;
    callbackSingle = callbackSingle || function(){};
    callbackAll = callbackAll || function(){};

    /* todo: use image.complete for IE */
    imageLoaded = function( $that ){
      totalCallbacks--;
        callbackSingle.apply( $that );

        if( (totalCallbacks-1) === 0 ){
          callbackAll.apply( $images );
        }
    };

    return $images.each(function(){
      var $that = $(this);

      if( this.complete ) {
        imageLoaded( $that );
      }else{
        $("<img />").attr("src", $that.attr("src") ).load(function(){
          imageLoaded( $that );
        });
      }

    });

  };


  return ImagePreloader;

});