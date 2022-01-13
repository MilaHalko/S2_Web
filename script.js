import './style.css';

const modal = document.getElementById('myModal');
const modalError = document.getElementById('myModalError');
const errP = document.getElementById('errMessage');
const span = document.getElementsByClassName('close')[0];
const spanAdd = document.getElementsByClassName('AddButt')[0];
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
    }).catch(() => {
        errP.innerHTML =
            'Ошибка отправления сообщения, отсутствует соединение с интернетом!';
        modalError.style.display = 'block';

        span.onclick = function () {
            modalError.style.display = 'none';
        };
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
    console.log(data.insert_notes.returning[0]);
    return data.insert_notes.returning[0];
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
    fetchGetNotes()
        .then((data, errors) => {
            if (errors) {
                console.error(errors);
                errP.innerHTML = errorMsg;
                modalError.style.display = 'block';

                span.onclick = function () {
                    modalError.style.display = 'none';
                };
            }
            console.log(data.data.notes.length);
            for (let index = 0; index < data.data.notes.length; index++) {
                createNote(false, data.data.notes[index]);
            }
        })
        .catch(ErrorHandler);
}

function ErrorHandler(error) {
    errP.innerHTML = error;
    modalError.style.display = 'block';

    span.onclick = function () {
        modalError.style.display = 'none';
    };
}

const AddButton = document.getElementsByClassName('add_notes')[0];
AddButton.addEventListener('click', () => {
    createNote(true, parseInt(1, 10));
});

function deleteNotes(event) {
    console.log(event.target.parentElement.parentElement.id);

    startExecuteDeleteNotes(event.target.parentElement.parentElement.id)
        .then(() => {
            event.target.parentElement.parentElement.classList.add('animate');
            document
                .getElementById(event.target.parentElement.parentElement.id)
                .remove();
        })
        .catch(ErrorHandler);
    console.log('Note was deleted');
}

function createNote(createNew, curNote) {
    console.log(curNote);

    if (createNew) {
        modal.style.display = 'block';

        spanAdd.onclick = function () {
            modal.style.display = 'none';
            const textArrVal = document.getElementById('note_textarea').value;
            startExecuteAddNotes(textArrVal)
                .then((newNoteData) => {
                    console.log(newNoteData);
                    const newNote = document.createElement('div');
                    newNote.id = newNoteData.note_id;
                    const textAre = document.createElement('div');
                    textAre.classList.add('note_info');
                    textAre.innerHTML =
                        document.getElementById('note_textarea').value;
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
                })
                .catch(ErrorHandler);
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
