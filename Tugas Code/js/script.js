function luas(){
    var tinggi = document.getElementById("input-tinggi").value;
    var alas = document.getElementById("input-alas").value;

    var displayluas = parseInt(tinggi) * parseInt(alas) / 2;
    
    console.log(displayluas);
    document.getElementById("displayluas").value=displayluas;
    
} 

function keliling(){
    var sisiA = document.getElementById("input-side01").value;
    var sisiB = document.getElementById("input-side02").value;
    var sisiC = document.getElementById("input-side03").value;

    var inputkeliling = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC);

    console.log(inputkeliling)
    document.getElementById("inputkeliling").value=inputkeliling;
}

function resetL(){
    var tinggi = document.getElementById("input-tinggi").value=0;
    var alas = document.getElementById("input-alas").value=0;
    var displayluas = document.getElementById("displayluas").value=0
}

function resetK(){
    var sisiA = document.getElementById("input-side01").value=0;
    var sisiB = document.getElementById("input-side02").value=0;
    var sisiC = document.getElementById("input-side03").value=0;
    var inputkeliling = document.getElementById("inputkeliling").value=0

}