const toDoList = []

function btnAdd() {
    let title = document.getElementById("lblTitle").value;
    let description = document.getElementById("lblDescription").value;

    toDoList.push(
        {
            cardTitle:title,
            cardDescription:description
        }
    )

}