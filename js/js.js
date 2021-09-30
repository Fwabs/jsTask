// var input = document.getElementById('myInput')
// var button = document.getElementById('myBtn')

// if(x.getAttribute('type') == 'password'){
//         x.setAttribute('type', 'text')
//     }
//     else{
//         x.setAttribute('type', 'password')
//     }

// button.addEventListener('click' , function(){
//     (input.getAttribute('type') == 'password') ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password')
// })

// ===================================================================================== //


// var myForm = document.getElementById('myForm')
// var toDoList = []
// myForm.addEventListener('submit', function(x){
//     x.preventDefault()
//     console.log(x.target.elements.taskName.value)
//     console.log(x.target.elements.taskType.value)
//     addTask(x.target.elements.taskName.value , x.target.elements.taskType.value )
// })



// function addTask(tName, tType){
//     var task = {
//         taskName : tName,
//         taskType : tType,
//         flag : false,
//     }
//     toDoList.push(task)
//     console.table(toDoList)
//     showTasks()
// }

// var taskCont = document.getElementById('task-container')
// function showTasks(){
//     taskCont.textContent = "";
//     toDoList.forEach((item , i) => {
//         var div = document.createElement('div')
//         var h2 = document.createElement('h2')
//         var h3 = document.createElement('h3')
//         var removeBtn = document.createElement('button')
//         var completedBtn = document.createElement('button')
//         h2.innerText = item.taskName
//         h3.innerText = item.taskType
//         removeBtn.innerText = 'Remove task'
//         completedBtn.innerText = 'Complete task' ; 
//         (item.flag == false) ? div.classList.add('alert', 'alert-secondary') : div.classList.add( 'alert', 'alert-success') 
//         completedBtn.classList.add('btn' , 'btn-success', 'me-3')
//         removeBtn.classList.add('btn' , 'btn-danger')
//         div.append(h2)
//         div.append(h3)
//         div.append(removeBtn)
//         div.append(completedBtn)
//         taskCont.append(div)

//         removeBtn.addEventListener('click' , function(){
//             removeTask(i)
//         });
//         completedBtn.addEventListener('click', function(){
//             completedTask(i)
//         });
//     });
// }

// function removeTask(index){
//     toDoList.splice(index ,1)
//     showTasks()
// }

// function completedTask(index){
//     toDoList[index].flag = true
//     showTasks()
// }



// ===================================================================================== //

var functionOverForm = document.getElementById('functionOverForm');
var clientInfo = [];

functionOverForm.addEventListener('submit' , function(e){
    e.preventDefault()
    addClient(e.target.elements.clientName.value,
    e.target.elements.clientId.value, e.target.elements.clientBalance.value)
})


function addClient(cName, cId, cBalance){
    var cDetails = {
        clientName : cName,
        clientId : cId,
        clientBalance : cBalance,
    }
    clientInfo.push(cDetails)
    addTContent()
}

var tableContent = document.getElementById('tableContainer')

function addTContent(){
    for (var i = 0 ; i < clientInfo.length; i++){
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        td1.innerText = i.clientName
        td2.innerText = i.clientId
        td3.innerText = i.clientBalance
        tableContent.append(td)
    }
}