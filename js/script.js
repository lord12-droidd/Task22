document.querySelector(".createTable").addEventListener('click',CreateTable)

//CreateTable()   uncomment if you want to open page already with 2x2 table

function CreateTable() {
    let row = document.querySelector(".rows").value
    let column = document.querySelector(".columns").value
    let table = document.createElement('table')
    if(row < 2 || column < 2){
        alert("Rows and Columns quantity must be more than 2")
        return
    }
    if(row > 15 || column > 15){
        alert("Rows and Columns quantity must be less than 15")
        return
    }
    for(let i = 0; i < row; i++){
        let tr = document.createElement('tr')
        for (let j = 0; j < column; j++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    document.querySelector('.tableWrapper').innerHTML = table.outerHTML
}