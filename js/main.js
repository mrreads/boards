const boards = document.querySelector('#boards');

let allBoardAdd = document.querySelectorAll('.board-add');

allBoardAdd.forEach(boardAdd => 
{
    boardAdd.addEventListener('click', (event) => 
    {
        event.target.insertAdjacentHTML('beforeBegin', 
        `<div class="board">
        <h1 class="board-name">simple text</h1>
            <p class="task">simple task</p>
            <p class="add">add another task</p>
        </div>`)
    })
});