let inputwidht;
let inputhight;
let area;
extractint();
function showmesage() {
    inputwidht = prompt("Enter the width");
    inputhight = prompt("Enter the hight");
}

function extractint() {
    showmesage();
    width = parseInt(inputwidht);
    hight = parseInt(inputhight);
    area = width * hight;
    document.write("The area is: "+area);
}
