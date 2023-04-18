var btnMK = document.getElementById('btnMK');
var checkMK =  btnMK.addEventListener('click',function(){
    var x = document.getElementById("textMK").value;
    var pattern = /^[0-9]{6,10}$/;
    var check = pattern.test(x);
    if(check){
        document.getElementById('showMK').innerHTML = "Nhập đúng định dạng";
    }else{
        document.getElementById('showMK').innerHTML = "Nhập sai định dạng, phải từ 6-10 chữ số";
    }
});

var btnTK = document.getElementById('btnTK');
var checkTK = btnTK.addEventListener('click',function(){
    var textTK = document.getElementById('textTK').value;
    var checkTK = /^[A-Za-z0-9 ]+$/;
    var result = checkTK.test(textTK);
    if(result){
        document.getElementById('showTK').innerHTML = "Nhập đúng định dạng";
    }else
        document.getElementById('showTK').innerHTML = "Nhập sai định dạng, không thể chứa kí tự đặc biệt";
});
