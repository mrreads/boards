document.addEventListener('contextmenu', event => event.preventDefault());
document.body.addEventListener('click', event => document.querySelector('.context') ? document.querySelector('.context').remove() : null)
const boards = document.querySelector('#boards');

let allBoardAdd = document.querySelectorAll('.board-add');
let allTaskAdd, taskAdd, boardName, xPos, yPos, task;

allBoardAdd.forEach(boardAdd => 
{
    boardAdd.addEventListener('click', eventBoard => 
    {
        eventBoard.target.insertAdjacentHTML('beforeBegin', 
        `<div class="board">
        <h1 class="board-name">simple text</h1>
            <p class="add">add another task</p>
        </div>`);

        taskAdd = boardAdd.previousElementSibling.querySelector('.add');
        taskAdd.addEventListener('click', eventTask =>
        {
            eventTask.target.insertAdjacentHTML('beforeBegin', 
            `<p class="task">simple task</p>`);

            eventTask.target.previousElementSibling.addEventListener('contextmenu', eventBoardName =>
            {
                document.querySelector('.context') ? document.querySelector('.context').remove() : null
                
                xPos = eventBoardName.clientX;
                yPos = eventBoardName.clientY;
    
                document.body.insertAdjacentHTML('beforeBegin', 
                `<div class="context" style="left: ${xPos}px; top: ${yPos}px"> 
                    <p class="delete"> Delete task</p>
                </div>`);
    
                document.querySelector('.context > .delete').addEventListener('click', eventDelete =>
                {
                    eventTask.target.previousElementSibling.remove();
                    document.querySelector('.context') ? document.querySelector('.context').remove() : null
                })
            });
        });

        boardName = boardAdd.previousElementSibling.querySelector('.board-name');
        boardName.addEventListener('contextmenu', eventBoardName =>
        {
            document.querySelector('.context') ? document.querySelector('.context').remove() : null
            
            xPos = eventBoardName.clientX;
            yPos = eventBoardName.clientY;

            document.body.insertAdjacentHTML('beforeBegin', 
            `<div class="context" style="left: ${xPos}px; top: ${yPos}px"> 
                <p class="delete"> Delete board</p>
            </div>`);

            document.querySelector('.context > .delete').addEventListener('click', eventDelete =>
            {
                eventBoardName.target.parentElement.remove();
                document.querySelector('.context') ? document.querySelector('.context').remove() : null
            })
        });
    });
});

