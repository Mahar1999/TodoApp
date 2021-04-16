const submit = document.querySelector('.itemInput__btn__submit')
const clearList = document.querySelector('.itemInput__btn__clear')
const list = document.querySelector('#list')
const itemList = document.querySelector('.itemList')

const dateTime = document.querySelector('.header__dateTime')

const addObj = function () {
    let input = document.querySelector('.itemInput__bar__search')

    //insertAdjacentHtml

    let html = `
    <li data-id="${Date.now()}">
        <a class="itemList__toDo">${input.value}</a>
        <div class="btn-container">
            <button class="itemList__done">Done</button>
            <button class="itemList__delete">Delete</button>
        </div>
    </li>
    `
    input.value = ''
    document.querySelector('#list').insertAdjacentHTML('beforeend', html)
}

///////// -->>EVENT LISTENERS 
submit.addEventListener('click', addObj)

list.addEventListener('click', e=>{

    if(!e.target.classList.contains('itemList__delete'))return
    
    const parent = e.target.closest('li')
    list.removeChild(parent)
})

list.addEventListener('click',e=>{

    //why dont we have to give "." here for classes
    if(!e.target.classList.contains('itemList__done'))return

    const parent = e.target.closest("li")
    parent.classList.add("done") 
})

clearList.addEventListener('click',()=>{
    itemList.removeChild(list)
})

//////DATE-TIME
dateTime.textContent = new Date().toLocaleDateString()
