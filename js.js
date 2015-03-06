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
var text2 = "here are a couple of my side projects:"
var text3 = "fuss free filing"
var text4 = "@uniquelyphilly"
var text5 = "don't be a stranger: jsmokry@gmail.com"


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
    linkIt('third', 'http://fussfreefiling.com');
}, 15780);   

setTimeout(function(){
    linkIt('fourth', 'http://www.twitter.com/uniquelyphilly');
}, 16850);   