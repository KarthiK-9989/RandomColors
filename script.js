var div = document.createElement('div');
div.id = "myid";
div.innerHTML = "abcd";
var button = document.createElement('button');
button.onclick = colorChange;
button.innerHTML = "click here";
div.append(button);
document.body.append(div);

function colorChange() {
    const div = document.getElementById('myid');
    div.style.backgroundColor = `rgb(${(Math.random()*1000)%256},${(Math.random()*1000)%256},${(Math.random()*1000)%256})`;
}