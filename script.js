

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
    while (true) {
        console.log(`num = ${num}`);
        console.log(`index = ${edited_index}`);
        num++
        console.log(`num = ${num}`);
        console.log(`index = ${edited_index}`);

        data = {
            title: `${Title}`,
            discription: `${Discription}`,
            date: `${date}`
        }
        data_array.push(data)
        node = document.createElement("div")
        node.className = "passing-card"
        node.innerHTML = ` <div class="card" >
        <div id="numb">${num}</div>
         <div class="card-header" id="display-date">${date}</div>
        <div class="card-body">
            <h5 class="card-title" id="display-title" >${Title}</h5>
            <p class="card-text" id="display-discription">${Discription}</p>
            <button onclick ="pass_index(${num})"  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#edit_modal">Edit</button>
            <button onclick ="delete_todo(${num})" type="button" class="btn btn-danger" data-bs-toggle="modal">Delete</button> 
            <button onclick ="markascomplete(${num})" type="button" class="btn btn-primary" data-bs-toggle="modal">Mark As Completed</button>
        </div>
        </div> `

        document.getElementById("scrolling-div").appendChild(node)
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
    edited_data = {
        title: `${edit_title}`,
        discription: `${edit_discription}`,
        date: `${edit_date}`
    }

    console.log(`edited index = ${edited_index}`);

    data_array[edited_index] = edited_data;

    console.log(data_array[edited_index]);
    console.log(data_array);

    let new_title = data_array[edited_index].title
    let new_discription = data_array[edited_index].discription
    let new_date = data_array[edited_index].date;

    const cards = document.getElementsByClassName('passing-card')
    const editingCard = cards[edited_index]
    editingCard.querySelector(`#display-date`).innerHTML = `${new_date}`
    editingCard.querySelector(`#display-title`).innerHTML = `${new_title}`
    editingCard.querySelector(`#display-discription`).innerHTML = `${new_discription}`
});


function markascomplete(index) {
    console.log(index);
    let div_array = document.getElementsByClassName("card")
    let div_element = div_array[index - 1]

    if (div_element.classList.contains("completeclass")) {
        div_element.classList.remove("completeclass");

    } else {
        div_element.classList.add("completeclass");
    }

}

function delete_todo(deleting_index) {
    data_array.splice(deleting_index - 1, 1)
    let deletediv = document.getElementsByClassName("passing-card")
    // let i = 0
    while (true) {
        deletediv[0].remove()
        // console.log(deletediv);            // remove//
        if (deletediv.length === 0) {
            console.log("finish");
            break
        }
    }


    arranged_div()
}


function arranged_div() {

    // node.innerHTML = ""
    console.log(data_array);
    let count = 0;

    while (count < data_array.length) {
        let date = data_array[count].date
        let Title = data_array[count].title
        let Discription = data_array[count].discription


        
        node = document.createElement("div")
        node.className = "passing-card"
        
        node.innerHTML = ` <div class="card" >
        <div id="numb">${count+1}</div>
         <div class="card-header" id="display-date">${date}</div>
        <div class="card-body">
            <h5 class="card-title" id="display-title" >${Title}</h5>
            <p class="card-text" id="display-discription">${Discription}</p>
            <button onclick ="pass_index(${count+1})"  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#edit_modal">Edit</button>
            <button onclick ="delete_todo(${count+1})" type="button" class="btn btn-danger" data-bs-toggle="modal">Delete</button> 
            <button onclick ="markascomplete(${count+1})" type="button" class="btn btn-primary" data-bs-toggle="modal">Mark As Completed</button>
        </div>
        </div> `
        document.getElementById("scrolling-div").appendChild(node)
        count++


    }
    num = count

}

