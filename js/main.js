const boards = document.querySelector('#boards');

let allBoardAdd = document.querySelectorAll('.board-add');
let allTaskAdd, taskAdd;

allBoardAdd.forEach(boardAdd => 
{
    boardAdd.addEventListener('click', eventBoard => 
    {
        let arr = eventBoard.target.insertAdjacentHTML('beforeBegin', 
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
    });
});

