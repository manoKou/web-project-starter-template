let throttlePause;
export default function throttle(callback, time){
  if (throttlePause) return;
  throttlePause = true;
  setTimeout(() => {
    callback();
    throttlePause = false;
  }, time);
};

export function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

export function toggleReadmoreText(container) {
  container.querySelectorAll('.js-readmore-par').forEach((el, i) => {
    el.classList.toggle('js-hidden');
  });
}


/*
 * Usage
 *
 *  @param {String} name - The name of the cookie.
 */
export function getCookie(name) {
   var match = document.cookie.match(name+'=([^;]*)');
   return match ? match[1] : undefined;
 };



/*
 * Usage
 *
 *  @param {String} c_name - The name of the cookie.
 *  @param {String} value - The value of the cookie.
 *  @param {Float} exdays - The number of days the cookie should last.
 *  @param {String} c_domain - The domain on which this cookie should be set and can be read.
 *
 */
 export function setCookie(c_name,value,exdays,c_domain) {
   c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
   document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
 }


 /*
  * Usage
  *    This function will append an external JavaScript to the head of the document.
  *
  *  @param {String} location - The location of the file you'd like to load.
  *  @param {Function} callback - [OPTIONAL] A function to call when the script has completed downloading.
  *
  *  example: loadScript('http://www.example.com/test.js', function() {});
  */
  export function loadScript(location, callback){
    var fileRef = document.createElement('script');
    fileRef.setAttribute('type','text/javascript');

    if (callback) {
      if (fileRef.readyState) {  // IE
        fileRef.onreadystatechange = function() {
          if (fileRef.readyState == 'loaded' || fileRef.readyState == 'complete') {
            fileRef.onreadystatechange = null;
            callback();
          }
        };
      } else {  // Non-IE
        fileRef.onload = function(){
          callback();
        };
      }
    }

    fileRef.setAttribute('src', location);
    document.head.appendChild(fileRef);
  };
