
const toDoList = [];

let taskNum = 0;

function btnAdd() {

    let title = document.getElementById("lblTitle").value;
    let description = document.getElementById("lblDescription").value;

    if (title === "" || description === "") {
        Swal.fire("Error!", "Please enter Title and Description", "error");
        return;
    }

    taskNum++;

    toDoList.push({
        id: taskNum,
        cardTitle: title,
        cardDescription: description,
    });

    let body = `
        <hr>
        <td>
            <div class="container" id="task${taskNum}">
                <div class="card text-center">
                    <div class="card-header">
                        Task No : ${taskNum}
                    </div>

                    <div class="card-body">
                        <h4 class="card-title" id="lblttle${taskNum}">${title}</h4>

                        <p class="card-text" id="lblDesc${taskNum}">${description}</p>

                    <div class="container">
                            <button id="btnEdit${taskNum}" type="button" class="btn-outline theme-primary"
                                onclick="btnEdit(${taskNum})">✎</button>

                            <button id="btnDelete${taskNum}" type="button" class="btn-outline theme-danger"
                                onclick="btnDelete(${taskNum})">x</button>

                            <button id="btnDone${taskNum}" type="button" class="btn-outline theme-success"
                                onclick="btnDone(${taskNum})">✓</button>
                        </div>
                    </div>

                    <div class="card-footer fg-2" id="footer${taskNum}">
                        ToDo works
                    </div>
                </div>
            </div>
        </td>
    `;

    document.getElementById("toDoCards").innerHTML += body;

    document.getElementById("lblTitle").value = "";
    document.getElementById("lblDescription").value = "";

    console.log(toDoList);
}

function btnDelete(id) {
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

            const index = toDoList.findIndex(task => task.id === id);

            if (index !== -1) {
                toDoList.splice(index, 1);
            }

            document.getElementById(`task${id}`).remove();

            Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success"
            });
        }
    });
}



async function btnEdit(id) {
    const task = toDoList.find(task => task.id === id);
    if (!task) return;

    const { value: formValues } = await Swal.fire({
        title: "Edit Title and Description",

        html: `
            <input id="swal-input1" class="swal2-input" placeholder="Enter new Title" value="${task.cardTitle}">
            <input id="swal-input2" class="swal2-input" placeholder="Enter new Description" value="${task.cardDescription}">
        `,

        focusConfirm: false,

        preConfirm: () => {
            let title = document.getElementById("swal-input1").value;
            let description = document.getElementById("swal-input2").value;

            if (title === "" || description === "") {
                Swal.showValidationMessage("Fields cannot be empty!");
                return false;
            }

            return {
                title: title,
                description: description
            };
        }
    });

    if (formValues) {
        task.cardTitle = formValues.title;
        task.cardDescription = formValues.description;

        document.getElementById(`lblttle${id}`).innerText = formValues.title;
        document.getElementById(`lblDesc${id}`).innerText = formValues.description;
    }
}


function btnDone(id) {

    const title = document.getElementById(`lblttle${id}`);
    const description = document.getElementById(`lblDesc${id}`);
    const footer = document.getElementById(`footer${id}`);

    title.style.textDecoration = "line-through";
    description.style.textDecoration = "line-through";

    footer.innerText = "Completed";

    document.getElementById(`btnDone${id}`).disabled = true;
    document.getElementById(`btnDelete${id}`).disabled = true;
    document.getElementById(`btnEdit${id}`).disabled = true;

}
