var typewrite = function(text, speed, el) {

    var letters = text.split('').map(function(l) {
        var span = document.createElement('span')
        span.textContent = l
        return span
    })

    var append = function(letters, next) {
        setTimeout(function() {
            if (letters[next] != null) {
                el.appendChild(letters[next])
                append(letters, next + 1)
            }
        }, speed)
    }
    append(letters, 0)
}

var linkIt = function(el, href){
    var wrapper = document.createElement('a'); 
    wrapper.href=href;
    var myDiv = document.getElementById(el); 
    wrapper.appendChild(myDiv.cloneNode(true)); 
    myDiv.parentNode.replaceChild(wrapper, myDiv); 
}

var text1 = "hey, what's up?"
var text2 = "here are a few of my side projects:"
var text3 = "fuss free filing"
var text4 = "@uniquelyphilly"
var text5 = "chronojournal"
var text6 = "helperize"
var text7 = "they touch on a few subjects i've been interested in lately, like social media trends and chronobiology."
var text8 = " if you wanna talk about them, or anything else, contact me at [email]"


setTimeout(function(){
    typewrite(text1, 160, first)
}, 1500);

setTimeout(function(){
    typewrite(text2, 160, second)
}, 5500);

setTimeout(function(){
    typewrite(text3, 160, third)
}, 12000);

setTimeout(function(){
    typewrite(text4, 160, fourth)
}, 13000);

setTimeout(function(){
    typewrite(text5, 160, fifth)
}, 14000);

setTimeout(function(){
    typewrite(text6, 160, sixth)
}, 15000);

setTimeout(function(){
    linkIt('third', 'http://www.example.com');
}, 15780);   

setTimeout(function(){
    linkIt('fourth', 'http://www.twitter.com/uniquelyphilly');
}, 16850);   

setTimeout(function(){
    linkIt('fifth', 'http://www.example.com');
}, 17900);   

setTimeout(function(){
    linkIt('sixth', 'http://www.example.com');
}, 18200);   

setTimeout(function(){
    typewrite(text7, 100, seventh)
}, 20000);

setTimeout(function(){
    typewrite(text8, 100, seventh)
}, 31400);