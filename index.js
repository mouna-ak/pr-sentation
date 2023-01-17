let input = document.getElementById('age').value
let date = new Date()
function getdate(){
    if(input.value){   
        alert( (date.getFullYear() - 1) - input.value)
    }
}
console.log(getdate())