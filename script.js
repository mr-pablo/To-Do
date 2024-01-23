

let Form = document.getElementById("form")
let edit_form = document.getElementById("edit-form")
let data = {}
let edited_data = {}
let data_array = []
var div
let num = 0
let Title, Discription, date, node, edit_title, edit_discription, edit_date
let edited_index
let pass_number
Form.addEventListener("submit", (e) => {
    e.preventDefault();
    Title = document.getElementById("title").value
    Discription = document.getElementById("discription").value
    date = document.getElementById("date").value
    $("#exampleModal").modal("hide");
    while (true) {
        console.log(`num = ${num}`);
        console.log(`index = ${edited_index}`);
        num++
        console.log(`num = ${num}`);
        console.log(`index = ${edited_index}`);

        data = {
            title: `${Title}`,
            discription: `${Discription}`,
            date: `${date}`,
            Markascomplete: false
        }
        data_array.push(data)
        arranged_div()
        Form.reset();
        return

    }
});

function check(number) {
    edited_index = number - 1
}

function pass_index(numpassing) {
    check(numpassing)
    console.log(numpassing - 1);
    document.getElementById("pass-title").value = data_array[numpassing - 1].title
    document.getElementById("pass-discription").value = data_array[numpassing - 1].discription
    document.getElementById("pass-date").value = data_array[numpassing - 1].date
}

edit_form.addEventListener("submit", (e) => {
    e.preventDefault();
    edit_title = document.getElementById("pass-title").value;
    edit_discription = document.getElementById("pass-discription").value;
    edit_date = document.getElementById("pass-date").value;
    data_array[edited_index].title = edit_title
    data_array[edited_index].discription = edit_discription
    data_array[edited_index].date = edit_date
    arranged_div()
});


function markascomplete(index) {
    console.log(index);

    if (data_array[index - 1].Markascomplete === true) {
        data_array[index - 1].Markascomplete = false

    } else {
        data_array[index - 1].Markascomplete = true
    }

    arranged_div()

}

function delete_todo(deleting_index) {
    data_array.splice(deleting_index - 1, 1)
    let deletediv = document.getElementsByClassName("passing-card")
    while (true) {
        deletediv[0].remove()
        if (deletediv.length === 0) {
            console.log("finish");
            break
        }
    }


    arranged_div()
}


function arranged_div() {
    let scrolldiv = document.getElementById("scrolling-div")
    scrolldiv.innerHTML = ""
    console.log(data_array);
    let count = 0;
    let new_index = 0

    while (count < data_array.length) {

        let selected_date = document.getElementById("list_date").value
        let mark = data_array[count].Markascomplete
        if (selected_date == data_array[count].date || selected_date == "") {
            if (mark == true) {
                let date = data_array[count].date
                let Title = data_array[count].title
                let Discription = data_array[count].discription



                node = document.createElement("div")
                node.className = "passing-card"

                node.innerHTML = ` <div class="card completeclass" >
            <div id="numb">${new_index + 1}</div>
             <div class="card-header" id="display-date">${date}</div>
            <div class="card-body">
                <h5 class="card-title" id="display-title" >${Title}</h5>
                <p class="card-text" id="display-discription">${Discription}</p>
                <button onclick ="pass_index(${count + 1})"  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#edit_modal">Edit</button>
                <button onclick ="delete_todo(${new_index + 1})" type="button" class="btn btn-danger" data-bs-toggle="modal">Delete</button> 
                <button onclick ="markascomplete(${count + 1})" type="button" class="btn btn-primary" data-bs-toggle="modal">Mark As Completed</button>
            </div>
            </div> `
                document.getElementById("scrolling-div").appendChild(node)
                new_index++
            } else {
                let date = data_array[count].date
                let Title = data_array[count].title
                let Discription = data_array[count].discription



                node = document.createElement("div")
                node.className = "passing-card"

                node.innerHTML = ` <div class="card" >
                    <div id="numb">${new_index + 1}</div>
                    <div class="card-header" id="display-date">${date}</div>
                    <div class="card-body">
                        <h5 class="card-title" id="display-title" >${Title}</h5>
                        <p class="card-text" id="display-discription">${Discription}</p>
                        <button onclick ="pass_index(${count + 1})"  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#edit_modal">Edit</button>
                        <button onclick ="delete_todo(${new_index + 1})" type="button" class="btn btn-danger" data-bs-toggle="modal">Delete</button> 
                        <button onclick ="markascomplete(${count + 1})" type="button" class="btn btn-primary" data-bs-toggle="modal">Mark As Completed</button>
                    </div>
                    </div> `
                document.getElementById("scrolling-div").appendChild(node)
                new_index++

            }



        }

        count++


    }

}


function show_date_input() {
    let value = 0
    value = document.getElementById("select_box").value
    console.log(value);
    let Selected_date = document.getElementById("list_date")
    if (value == 2) {
        document.getElementById("list_date").style.display = "block"
    } if (value == 1) {
        document.getElementById("list_date").style.display = "none"

        Selected_date.value = ""

        arranged_div()
    }


}




