function main() {
    let amount = document.getElementById("amount").value;
    let select1= document.getElementById("select1").value;
    let select2= document.getElementById("select2").value;
    let result= document.getElementById("result").value;
    if (select1 == select2){
        document.getElementById("result").innerHTML='Result: '+amount;
    }
    if (select1 == "VND" && select2 == "USD"){
        document.getElementById("result").innerHTML='Result: '+(amount/23000);
    }
    if (select1 == "USD" && select2 == "VND"){
        document.getElementById("result").innerHTML='Result: '+(amount/23000);
    }
}
