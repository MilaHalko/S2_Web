import './style.css';

const modal = document.getElementById('myModal');
const modalError = document.getElementById('myModalError');
const errP = document.getElementById('errMessage');
const span = document.getElementsByClassName('close')[0];
const errorMsg = 'Ошибка создания заметки!';

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(process.env.VITE_HASURA_SITE, {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': process.env.VITE_HASURA_KEY,
        },
        method: 'POST',
        body: JSON.stringify({
            query: operationsDoc,
            variables,
            operationName,
        }),
    });

    return result.json();
}

const operationsDoc = `
  mutation AddNotes($note_text: String = "") {
    insert_notes(objects: {note_active: true, note_text: $note_text}) {
      returning {
        note_active
        note_id
        note_text
      }
    }
  }
  
  mutation DeleteNotes($_eq: uuid = "") {
    delete_notes(where: {note_id: {_eq: $_eq}}) {
      returning {
        note_id
      }
    }
  }
  
  query GetNotes {
    notes {
      note_active
      note_id
      note_text
    }
  }
`;

function executeAddNotes(note_text) {
    return fetchGraphQL(operationsDoc, 'AddNotes', { note_text });
}

function executeDeleteNotes(_eq) {
    return fetchGraphQL(operationsDoc, 'DeleteNotes', { _eq });
}

function fetchGetNotes() {
    return fetchGraphQL(operationsDoc, 'GetNotes', {});
}

async function startExecuteAddNotes(note_text) {
    const { errors, data } = await executeAddNotes(note_text);
    if (errors) {
        console.error(errors);
        errP.innerHTML = errorMsg;
        modalError.style.display = 'block';

        span.onclick = function () {
            modalError.style.display = 'none';
        };
    }
    console.log('CREATED NEW');
    console.log(data);
    return data.notes;
}

async function startExecuteDeleteNotes(_eq) {
    const { errors, data } = await executeDeleteNotes(_eq);
    if (errors) {
        console.error(errors);
        errP.innerHTML = errorMsg;
        modalError.style.display = 'block';

        span.onclick = function () {
            modalError.style.display = 'none';
        };
    }
    console.log(data);
}

async function startFetchGetNotes() {
    const { errors, data } = await fetchGetNotes();
    if (errors) {
        console.error(errors);
        errP.innerHTML = errorMsg;
        modalError.style.display = 'block';

        span.onclick = function () {
            modalError.style.display = 'none';
        };
    }
    console.log(data.notes.length);
    for (let index = 0; index < data.notes.length; index++) {
        createNote(false, data.notes[index]);
    }
    console.log(data.notes.length);
}

const AddButton = document.getElementById('add_note');
AddButton.addEventListener('click', () => {
    createNote(true, parseInt(1, 10));
});

function deleteNotes(event) {
    console.log(event.target.parentElement.parentElement.id);
    event.target.parentElement.parentElement.classList.add('animate');

    document
        .getElementById(event.target.parentElement.parentElement.id)
        .remove();
    startExecuteDeleteNotes(event.target.parentElement.parentElement.id);
    console.log('Note was deleted');
}

function createNote(createNew, curNote) {
    console.log(curNote);

    if (createNew) {
        modal.style.display = 'block';

        span.onclick = function () {
            modal.style.display = 'none';
            const textArrVal = document.getElementById('note_textarea').value;
            const newNoteData = startExecuteAddNotes(textArrVal);
            const newNote = document.createElement('div');
            newNote.id = newNoteData.note_id;
            const textAre = document.createElement('div');
            textAre.classList.add('note_info');
            textAre.innerHTML = document.getElementById('note_textarea').value;
            newNote.appendChild(textAre);

            newNote.classList.add('notes');
            newNote.classList.add('animate');
            const buttDelete = document.createElement('div');
            buttDelete.classList.add('delete_notes');
            newNote.appendChild(buttDelete);

            const imgDelete = document.createElement('span');
            imgDelete.innerHTML = 'x';
            imgDelete.addEventListener('click', deleteNotes);
            buttDelete.appendChild(imgDelete);

            setTimeout(() => {
                newNote.classList.remove('animate');
            }, 20);
            document.body.insertBefore(newNote, AddButton);
            document.getElementById('note_textarea').value = '';
            console.log('Note was added');
        };
    } else {
        const newNote = document.createElement('div');
        newNote.id = curNote.note_id;
        const textAre = document.createElement('div');
        textAre.classList.add('note_info');
        textAre.innerHTML = curNote.note_text;
        newNote.appendChild(textAre);

        newNote.classList.add('notes');
        newNote.classList.add('animate');
        const buttDelete = document.createElement('div');
        buttDelete.classList.add('delete_notes');
        newNote.appendChild(buttDelete);

        const imgDelete = document.createElement('span');
        imgDelete.innerHTML = 'x';
        imgDelete.addEventListener('click', deleteNotes);
        buttDelete.appendChild(imgDelete);

        setTimeout(() => {
            newNote.classList.remove('animate');
        }, 20);
        document.body.insertBefore(newNote, AddButton);
        document.getElementById('note_textarea').value = '';
        console.log('Note was added');
    }
}
startFetchGetNotes();
