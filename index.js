
  window.addEventListener("load", () => {
    const form_start = document.querySelector("#forms");
    const input_title_start = document.querySelector("#title_new");
    const input_note_start = document.querySelector("#note_new");
    const input_notes_end = document.querySelector("#notes");





      form_start.addEventListener("submit" , (e) => {
    e.preventDefault();

    const new_title = input_title_start.value;

    const new_note = input_note_start.value;

    if(!new_title) {
        alert("Please fill out the title");
        return;
    } else {

//create new title
// 1. - div - c, add class, append
const note_el = document.createElement("div");
note_el.classList.add("content");
input_notes_end.appendChild(note_el);

//2. - form - c, add id, append to content class
const form_start = document.createElement("form");
form_start.setAttribute("id", "submit_view");
note_el.appendChild(form_start);

//3. - table - c -> first input of title, append to form
const table = document.createElement("table");
const table_tr = document.createElement("tr");
const table_td_1 = document.createElement("td");
const table_input_1 = document.createElement("input");
table_input_1.classList.add("title");
table_input_1.type = "text";
table_input_1.value= new_title;
table_input_1.setAttribute("readonly", "readonly");

table_td_1.appendChild(table_input_1);
table_tr.appendChild(table_td_1);
table.appendChild(table_tr);
form_start.appendChild(table);


//create new note
//1. - second input in table, append to tr(37)
const table_td_2 = document.createElement("td");
const table_input_2 = document.createElement("input");
table_input_2.classList.add("note");
table_input_2.type = "text";
table_input_2.value = new_note;
table_input_2.setAttribute("readonly", "readonly");

table_td_2.appendChild(table_input_2);
table_tr.appendChild(table_td_2);


//c submit input - view details
//1. c, add class, type etc, append to form
const b_view = document.createElement("input");
b_view.classList.add("show-view");
b_view.type = "submit";
b_view.value = "View details";

form_start.appendChild(b_view);


//c button - edit, delete
//1. add, class etc, append form
const b_edit = document.createElement("button");
b_edit.classList.add("edit");
b_edit.innerText = "Edit";

const b_del = document.createElement("button");
b_del.classList.add("delete");
b_del.innerText = "Delete";

form_start.appendChild(b_edit);
form_start.appendChild(b_del);

//button func for edit
b_edit.addEventListener("click", (e) => {
    e.preventDefault();

    if(b_edit.innerHTML.toLocaleLowerCase() == "edit") {
          b_edit.innerHTML = "Save";
          table_input_1.removeAttribute("readonly");
          table_input_1.focus();
          table_input_2.removeAttribute("readonly");
          table_input_2.focus();
    } else {
          table_input_1.setAttribute("readonly", "readonly");
          table_input_2.setAttribute("readonly", "readonly");
          b_edit.innerHTML = "Edit";
}});

//remove button - del fun , remove from id notes (content class)
b_del.addEventListener("click", () => {
input_notes_end.removeChild(note_el);
});

//view details fun
//1. title
b_view.addEventListener("click", (e) => {
    e.preventDefault();

    const form_pop = document.createElement("form");
    form_pop.setAttribute("id", "form_pop");
    input_notes_end.appendChild(form_pop);
    
    const container_pop = document.createElement("div");
    container_pop.classList.add("container-popup");
    form_pop.appendChild(container_pop);
    
    const popup = document.createElement("div");
    popup.classList.add("popup");
    container_pop.appendChild(popup);
    
    const title_pop = document.createElement("div");
    title_pop.classList.add("title-pop");
    title_pop.innerHTML = new_title;
    popup.appendChild(title_pop);
    
    //2. content
    const note_pop = document.createElement("div");
    note_pop.classList.add("note-pop");
    note_pop.innerHTML = new_note;
    popup.appendChild(note_pop);
    
    const b_x = document.createElement("button");
    b_x.innerHTML = "x";
popup.appendChild(b_x);

b_x.addEventListener("click", (e) => {
    e.preventDefault();
input_notes_end.removeChild(form_pop);
});

      });
      forms.reset();
    }
  });
     });



 
    //  window.onclick = function (event) {
    //     let modal = document.getElementById('loginPopup');
    //     if (event.target == modal) {
    //       closeForm();
    //     }
    //   }