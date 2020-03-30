document.addEventListener('contextmenu', event => event.preventDefault());
document.body.addEventListener('click', event => document.querySelector('.context') ? document.querySelector('.context').remove() : null)
const boards = document.querySelector('#boards');

let allBoardAdd = document.querySelectorAll('.board-add');
let allTaskAdd, taskAdd, boardName, xPos, yPos;

allBoardAdd.forEach(boardAdd => 
{
    boardAdd.addEventListener('click', eventBoard => 
    {
        eventBoard.target.insertAdjacentHTML('beforeBegin', 
        `<div class="board">
        <h1 class="board-name">simple text</h1>
            <p class="task">simple task</p>
            <p class="add">add another task</p>
        </div>`);

        taskAdd = boardAdd.previousElementSibling.querySelector('.add');
        taskAdd.addEventListener('click', eventTask =>
        {
            eventTask.target.insertAdjacentHTML('beforeBegin', 
            `<p class="task">simple task</p>`);
        });

        boardName = boardAdd.previousElementSibling.querySelector('.board-name');
        boardName.addEventListener('contextmenu', eventBoardName =>
        {
            document.querySelector('.context') ? document.querySelector('.context').remove() : null
            
            xPos = eventBoardName.clientX;
            yPos = eventBoardName.clientY;

            document.body.insertAdjacentHTML('beforeBegin', 
            `<div class="context" style="left: ${xPos}px; top: ${yPos}px"> 
                <p> Delete board</p>
            </div>`);
        });
    });
});

