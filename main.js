let id = document.querySelector('#id')
let pw1 = document.querySelector('#psw1')
let pwImg1 = document.querySelector('#psw1_img1')
let pw2 = document.querySelector('#psw2')
let pwImg2 = document.querySelector('#psw2_img1')


//에러 메세지
let error = document.querySelectorAll('.error_next_box')
let pwMsg = document.querySelector('#alertTxt')

id.addEventListener('focusOut', checkId)
// ⏩id.addEventListener('focusOut',function checkId (){})

function checkId() {
    var idPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    console.log(idPattern.test(id.value))
}