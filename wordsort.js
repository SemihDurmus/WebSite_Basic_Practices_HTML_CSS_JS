var nrwordstring = '';
var nrword = 0;
var wordarray = [];

// document.getElementById("temporarydescription").style.visibility='hidden';
// document.getElementById("temporarydescription").style.color='yellow';
// document.getElementById("temporarydescription").style.top='-5%';

document.getElementById("submit").onclick = function() {
    var nrwordstring = document.getElementById("nrofwords").value;

    nrword = parseInt(nrwordstring,10);

    if (isNaN(nrword)) {
        window.alert('You should enter a proper number');
        location.reload();
    }

    if (nrword>10) {
        window.alert('You should enter a number between 1 and 10');
        location.reload();
    }

    for (i=1; i<nrword+1; i++) {
        document.getElementById("leftside").innerHTML = 
        document.getElementById("leftside").innerHTML +
        '<input type="text"  name="words[]"  ' + i + ' class="leftboxes" size="15" maxlength="15"></input>';
        secondstate();
    }
}


document.getElementById("sort").onclick = function() {
    var inputs = document.getElementsByClassName("leftboxes"),
    names  = [].map.call(inputs, function( input ) {
    return input.value;
    }).join( '---' );
    wordarray=names.split("---");
    
    wordarray.sort();
  
    for (i=0; i<nrword; i++) {
        document.getElementById("rightside").innerHTML=
        document.getElementById("rightside").innerHTML +
        '<p class="rightboxes">' + wordarray[i] + '</p>';
    }

    document.getElementById("sort").style.display='none';
    document.getElementById("reset").style.visibility='visible';
}

document.getElementById("reset").onclick = function() {
    location.reload();
}

function secondstate() {
    document.getElementById("nrofwords").style.visibility='hidden';
    document.getElementById("submit").style.visibility='hidden';
    document.getElementById("sort").style.visibility='visible';
}


