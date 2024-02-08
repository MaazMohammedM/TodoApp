const input = document.getElementById('inputBox');
const addToListBtn = document.getElementById('btn');
const todoListContainer = document.getElementById('todoListContainer');


addToListBtn.addEventListener('click',()=>{
    if(input.value === ''){
        alert('Enter Some Text')
    } else{
        createToDo(input.value)
        input.value = '';
    }
})

input.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        if(input.value === ''){
            alert('Enter Some Text')
        } else{
            createToDo(input.value)
            input.value = '';
        }
    }
})

const createToDo =(data)=>{
    let listContainer = document.createElement('ul');
    let list = document.createElement('li');
    list.classList.add('listStyle');
    list.innerHTML = `
    ${data} <button class='redBtn' id='delBtn'>Delete</button>
    `;
    


    list.addEventListener('click',function(){
            this.classList.toggle('done');
    }
    )

    list.querySelector('button').addEventListener('click',()=>{
        listContainer.remove();
    })



    listContainer.appendChild(list);
    todoListContainer.appendChild(listContainer);
 
}


