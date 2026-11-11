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
                <div id = "lblTaskCard" class = "container">
                    <div class="card text-center ">
                        <div class="card-header">
                            Task No : ${taskNum}
                        </div>
                        <div class="card-body">
                            <h4 class="card-title" id="lblttle">${title}</h4>
                            <p class="card-text" id="lblDesc">${description}</p>
                            <div class="container">
                                <button type="button" class="btn-outline theme-primary" onclick="btnEdit()">✎</button>
                                <button type="button" class="btn-outline theme-danger" onclick="btnDelete()">x</button>
                                <button type="button" class="btn-outline theme-success" onclick="btnDone()">✓</button>
                            </div>
                        </div>
                        <div class="card-footer fg-2">
                            ToDo works
                        </div>
                    </div>
                <div>
            </td>
        <tr>`

    document.getElementById("toDoCards").innerHTML += body;

    console.log(toDoList);


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
        if (result.isConfirmed) {
            toDoList.splice(1)
            const toDoCards = document.getElementById("toDoCards");

            if (toDoCards && toDoCards.lastElementChild) {
                toDoCards.removeChild(toDoCards.lastElementChild);
            }

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}

async function btnEdit() {
    const { value: formValues } = await Swal.fire({
        title: "Edit Title and Description",
        html: `
    <input id="swal-input1" class="swal2-input" placeholder = "Enter new Title">
    <input id="swal-input2" class="swal2-input" placeholder = "Enter new Description">
  `,
        focusConfirm: false,
        preConfirm: () => {
            return [document.getElementById("swal-input1").value, document.getElementById("swal-input2").value];
        }
    });
    if (formValues) {
        document.getElementById("lblttle").innerText = formValues[0];
        document.getElementById("lblDesc").innerText = formValues[1];
    }
}

function btnDone() {
    document.getElementById("toDoCards").value = null
}
