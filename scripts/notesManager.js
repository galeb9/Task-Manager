const addNoteBtn = document.querySelector("#add-note-btn")
const noteContainer = document.querySelector("#note-container");


const createNote = () =>{
    const noteHolder = document.createElement("div");
    noteContainer.insertAdjacentElement("afterbegin", noteHolder)
    noteHolder.id = "noteHolder"
    const newNote = document.createElement("div");
    newNote.classList.add("note-item")
    // new components created
    // create note title container
    const titleHolder = document.createElement("div");
    titleHolder.classList.add("note-title-container");
    titleHolder.innerHTML=`<input class="note-title note" type="textarea" placeholder="Note title">`
    newNote.append(titleHolder);

    // create note body
    const noteBody = document.createElement("div");
    noteBody.innerHTML= `<textarea  class="note-body note" name="" id="" cols="30" rows="5"  placeholder="Note body"></textarea>`
    newNote.append(noteBody)
    // remove single note
    const noteRemoveBtn = document.createElement("i");
    noteRemoveBtn.classList.add("fas", "fa-times")

    noteRemoveBtn.addEventListener("click",()=>{
        noteHolder.remove()
    })
    titleHolder.append(noteRemoveBtn)
    noteHolder.append(newNote);
}





addNoteBtn.addEventListener("click", createNote);