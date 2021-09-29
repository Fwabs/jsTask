var div = document.getElementById('myDiv')



/////////////////////////
// div.addEventListiener('scroll' , handlescroll)
// function handlescroll(){

// }
////////////////////////

/////////////////// scroll on Elment
div.addEventListener('scroll' , function(){
    console.log(div.scrollTop)
    if(div.scrollTop > 150) div.style.background = 'red' 
       else div.style.background = 'lightgray' 
    // div.scrollLeft   
})

//////////////////// scroll on window (BOM)
var topBtn = document.querySelector('#topBtn')

window.addEventListener('scroll' , function(){
    console.log('window is scrolling...');
    (document.documentElement.scrollTop > 300) ?  topBtn.style.display = 'block' : topBtn.style.display = 'none';

})

//////////////////////////////////////////

//// create Element

var section = document.getElementById('mySection')

var h1 = document.createElement('h1')  /// create h1 tag
var anchor = document.createElement('a')

h1.textContent = 'lorem ipsum'
anchor.innerText = 'Google'

/// create attribute
anchor.setAttribute('href' , '#google')

// section.prepend(h1) // add element the start of parent
section.append(h1) // add element the end of parent
section.append(anchor)



//// get Attribute value
var input = document.querySelector('#myInput')
console.log(input.getAttribute('placeholder'))
input.setAttribute('type' , 'email') // set / update

input.toggleAttribute('disabled')

/////////////////////////////////////////
var firstName = 'nouran'
localStorage.setItem('firstName' , 'nouran')
// localStorage.removeItem('firstName')
console.log(localStorage.getItem('id'))

var id = localStorage.getItem('id')

// json ==> javascript object notation 
var users = [
    {
        name:'nouran',
        id:'1',
        balance :'200'
    },
    {
        name:'mai',
        id:'2',
        balance :'200'
    },
    {
        name:'zain',
        id:'3',
        balance :'200'
    },
    {
        name:'tamer',
        id:'4',
        balance :'200'
    },
]

// console.log(JSON.stringify(users))

// localStorage.setItem('usersInfo' , JSON.stringify(users) )

// var info = JSON.parse(localStorage.getItem('usersInfo'))

// // console.log(info)


// for(var i = 0 ; i < info.length ; i++){
//     console.log(info[i])
// }


// localStorage.removeItem('addresse')


// sessionStorage.setItem('id' , '1')
