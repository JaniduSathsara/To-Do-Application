const toDoList = []

let taskNum = 0;

function btnAdd() {
    let title = document.getElementById("lblTitle").value;
    let description = document.getElementById("lblDescription").value;

    toDoList.push(
        {
            cardTitle: title,
            cardDescription: description
        }
    )

    taskNum++
    let body = `
        <hr>
        <tr>
            <td>
                <div class="card text-center container">
                    <div class="card-header">
                        Task No : ${taskNum}
                    </div>
                    <div class="card-body">
                        <h4 class="card-title" id="lblttle">${title}</h4>
                        <p class="card-text" id="lblDesc">${description}</p>
                        <div class="container">
                            <button type="button" class="btn-outline theme-primary" onclick="btnEdit()">✎</button>
                            <button type="button" class="btn-outline theme-danger" onclick="btnDelete()">🗑</button>
                            <button type="button" class="btn-outline theme-success" onclick="btnDone()">✓</button>
                        </div>
                    </div>
                    <div class="card-footer fg-2">
                        ToDo works
                    </div>
                </div>
            </td>
        <tr>`

    document.getElementById("toDoCards").innerHTML += body;

}


function btnDelete() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
    });
}

function btnDone() {

}

function btnMode() {

    Swal.fire({
        title: 'Bootstrap 4 theme',
        theme: 'bootstrap-4-light'
    })
}