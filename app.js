const add = document.getElementById('addToDo')
const list = document.getElementById('toDoContainer')
const input = document.getElementById('inputfield');
const msg = document.querySelector('.msg');



add.addEventListener('click', () => {

    const item = document.createElement("div");
    item.innerText = input.value;
    item.classList.add('item')

    if(item.innerText !== ""){
    list.appendChild(item);
        msg.classList.add("hide");
    }else{
        msg.textContent = "Add Some Text"
        msg.classList.remove("hide")
    }
    
    item.addEventListener('click',() => {
        item.style.textDecoration = 'line-through';
    })

    item.addEventListener("dblclick", () => {
          list.removeChild(item);
    });
})


