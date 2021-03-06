document.addEventListener('contextmenu', event => event.preventDefault());
document.body.addEventListener('click', event => document.querySelector('.context') ? document.querySelector('.context').remove() : null)

const boards = document.querySelector('#boards');

let allBoardAdd = document.querySelectorAll('.board-add');
let allTaskAdd, taskAdd, boardName, xPos, yPos, task, temp;

allBoardAdd.forEach(boardAdd => 
{
    boardAdd.addEventListener('click', eventBoard => 
    {
        // создание доски
        eventBoard.target.insertAdjacentHTML('beforeBegin', 
        `<div class="board">
            <h1 class="board-name">simple text</h1>
            <div class="tasks"></div>
            <p class="add">add another task</p>
        </div>`);
        ;
        
        new Sortable(boardAdd.previousElementSibling.querySelector('.tasks'), 
        {
            animation: 550,
            filter: '.add',
            ghostClass: 'inDragging'
        });

        // создание нового таска
        taskAdd = boardAdd.previousElementSibling.querySelector('.add');
        taskAdd.addEventListener('click', eventTask =>
        {
            eventTask.target.parentElement.querySelector('.tasks').insertAdjacentHTML('beforeEnd', `<p class="task">simple task</p>`);
            // правой кнопкой на таск
            eventTask.target.parentElement.querySelector('.tasks').lastChild.addEventListener('contextmenu', lisneterTask);
        });

        boardName = boardAdd.previousElementSibling.querySelector('.board-name');
        // right click on board name
        boardName.addEventListener('contextmenu', lisneterBoardName);
    });
});


function lisneterBoardName(eventBoardName)
{
    document.querySelector('.context') ? document.querySelector('.context').remove() : null
            
    xPos = eventBoardName.clientX;
    yPos = eventBoardName.clientY;

    document.body.insertAdjacentHTML('beforeBegin', 
    `<div class="context" style="left: ${xPos}px; top: ${yPos}px"> 
        <p class="edit"> Edit name</p>
        <p class="delete"> Delete board</p>
    </div>`);

    document.querySelector('.context > .delete').addEventListener('click', eventDelete =>
    {
        eventBoardName.target.parentElement.remove();
        document.querySelector('.context') ? document.querySelector('.context').remove() : null
    })

    document.querySelector('.context > .edit').addEventListener('click', eventDelete =>
    {
        temp = document.createElement('input');
        temp.classList.add('board-name');
        temp.value = eventBoardName.target.innerHTML;

        temp.addEventListener('contextmenu', eventBoardName =>
        {
            document.querySelector('.context') ? document.querySelector('.context').remove() : null
            
            xPos = eventBoardName.clientX;
            yPos = eventBoardName.clientY;

            document.body.insertAdjacentHTML('beforeBegin', 
            `<div class="context" style="left: ${xPos}px; top: ${yPos}px"> 
                <p class="save"> Save name</p>
            </div>`);


            document.querySelector('.context > .save').addEventListener('click', eventSave =>
            {
                temp = document.createElement('h1');
                temp.classList.add('board-name');
                temp.textContent = eventBoardName.target.value;
                temp.addEventListener('contextmenu', lisneterBoardName);
                eventBoardName.target.parentNode.replaceChild(temp, eventBoardName.target);
                
                document.querySelector('.context') ? document.querySelector('.context').remove() : null
                
            })
        });

        eventBoardName.target.parentNode.replaceChild(temp, eventBoardName.target);
        document.querySelector('.context') ? document.querySelector('.context').remove() : null
    });
}

function lisneterTask (eventTaskName)
{
    document.querySelector('.context') ? document.querySelector('.context').remove() : null
        
    xPos = eventTaskName.clientX;
    yPos = eventTaskName.clientY;

    document.body.insertAdjacentHTML('beforeBegin', 
    `<div class="context" style="left: ${xPos}px; top: ${yPos}px"> 
        <p class="edit"> Edit task </p>
        <p class="delete"> Delete task</p>
    </div>`);

    document.querySelector('.context > .delete').addEventListener('click', eventDelete =>
    {
        eventTaskName.target.remove();
        document.querySelector('.context') ? document.querySelector('.context').remove() : null
    });

    document.querySelector('.context > .edit').addEventListener('click', eventDelete =>
    {
        temp = document.createElement('textarea');
        temp.classList.add('task');
        temp.value = eventTaskName.target.innerHTML;

        temp.addEventListener('contextmenu', eventTaskName =>
        {
            document.querySelector('.context') ? document.querySelector('.context').remove() : null
            
            xPos = eventTaskName.clientX;
            yPos = eventTaskName.clientY;

            document.body.insertAdjacentHTML('beforeBegin', 
            `<div class="context" style="left: ${xPos}px; top: ${yPos}px"> 
                <p class="save"> Save name</p>
            </div>`);


            document.querySelector('.context > .save').addEventListener('click', eventSave =>
            {
                temp = document.createElement('p');
                temp.classList.add('task');
                temp.textContent = eventTaskName.target.value;

                temp.addEventListener('contextmenu', lisneterTask);

                eventTaskName.target.parentNode.replaceChild(temp, eventTaskName.target);
                
                document.querySelector('.context') ? document.querySelector('.context').remove() : null
                
            })
        });

        eventTaskName.target.parentNode.replaceChild(temp, eventTaskName.target);
        document.querySelector('.context') ? document.querySelector('.context').remove() : null
    });
}

new Sortable(boards, 
{
    handle: '.board-name',
    animation: 550,
    filter: '.board-add',
    ghostClass: 'inDragging'
});