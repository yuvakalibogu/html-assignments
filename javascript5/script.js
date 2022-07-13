window.onload = function(){

    document.getElementById("div1").addEventListener('click',function () {
        alert('div1');
    });
    
    document.getElementById("div2").addEventListener('click', (e) => {
        alert('div2');
        // e.stopImmediatePropagation();
        // e.preventDefault();
    });
    
    document.getElementById("div2").addEventListener('click', (e) => {
        greet();
    });
    
    function greet() {
        alert("good morning");
    }
    
    document.getElementById("div3").addEventListener('click', (event) => {
        alert('div3');
        event.stopPropagation();    
    });
    
    var list = [ 'first', 'second'];
    //Create a list with for loop to show the print the array value.
    for( var i in list ) {
    var li = document.createElement('li');
    var textNode = document.createTextNode(list[i]);
    var btn = document.createElement('button'); 
    btn.innerHTML = "index";
    console.log(i);
    btn.onclick = function(i) {
    alert('index is '+i);
    }.bind(null, i);
    // btn.onclick = function() {
    //     alert('index is '+i);
    //     };
    li.appendChild(textNode);
    li.appendChild(btn);
    document.getElementById('root').appendChild(li);
    }
    
    }
   