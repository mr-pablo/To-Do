
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
        num++

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
        <div class="card-header" id="display-date${num - 1}">${date}</div>
        <div class="card-body">
            <h5 class="card-title" id="display-title${num - 1}">${Title}</h5>
            <p class="card-text" id="display-discription${num - 1}">${Discription}</p>
            <button onclick ="pass_index(${num}), check(${num})"  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#edit_modal">Edit</button>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal">Delete</button> 
            <button onclick ="markascomplete(${num})" type="button" class="btn btn-primary" data-bs-toggle="modal">Mark As Completed</button>
        </div>
        </div> `

        document.getElementById("scrolling-div").appendChild(node)
        // document.getElementById("")
        Form.reset();
        return

    }
});

function check(number) {
    edited_index = number - 1
}

function pass_index(numpassing) {
    document.getElementById("pass-title").value = data_array[numpassing - 1].title
    document.getElementById("pass-discription").value = data_array[numpassing - 1].discription
    document.getElementById("pass-date").value = data_array[numpassing - 1].date
}


function edit_todo() {
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

        console.log(edited_index);

        data_array[edited_index] = edited_data;

        console.log(data_array[edited_index]);



        let new_title = data_array[edited_index].title
        let new_discription = data_array[edited_index].discription
        let new_date = data_array[edited_index].date

        document.getElementById(`display-date${edited_index}`).innerHTML = `${new_date}`
        document.getElementById(`display-title${edited_index}`).innerHTML = `${new_title}`
        document.getElementById(`display-discription${edited_index}`).innerHTML = `${new_discription}`
    });

}

function markascomplete(index) {

    let completecheckdate = document.getElementById(`display-date${index - 1}`)


    if (completecheckdate.classList.contains("completeclass")) {
        completecheckdate.classList.remove("completeclass");
        document.getElementById(`display-date${index - 1}`).style.textDecoration = "none";
        document.getElementById(`display-title${index - 1}`).style.textDecoration = "none";
        document.getElementById(`display-discription${index - 1}`).style.textDecoration = "none";

    } else {
        completecheckdate.classList.add("completeclass");
        document.getElementById(`display-date${index - 1}`).style.textDecoration = "line-through";
        document.getElementById(`display-title${index - 1}`).style.textDecoration = "line-through";
        document.getElementById(`display-discription${index - 1}`).style.textDecoration = "line-through";
    }
}


















// array = [{
//     car:"bmw"
//     type:"sports"
// }]













// array = { title: `${Title}`,
// discription: `${Discription}`,
// date: `${date}`},

// 1{ title: `${Title}`,
// discription: `${Discription}`,
// date: `${date}`},

// 2{ title: `${Title}`,
// discription: `${Discription}`,
// date: `${date}`},

// 3{ title: `${Title}`,
// discription: `${Discription}`,
// date: `${date}`},
// ]