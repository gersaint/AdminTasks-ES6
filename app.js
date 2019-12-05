// alert("Words...")
// console.log( document.getElementById("formTask") );
// document.getElementById("formTasks");


document.getElementById('formTask').addEventListener('submit', saveTask );

function saveTask ( e ) {

    /*
        console.log(e);
        alert("enviando formulario...");

     */

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    // console.log( title, description );

    const task = {
        title,      // same --> title: title
        description // same --> description: description
    };

    // console.log(task);
    // localStorage.setItem( 'tasks', task );
    // localStorage.setItem( 'tasks', JSON.stringify(task) );
    // console.log( localStorage.getItem( 'tasks' ) );
    // console.log( JSON.parse ( localStorage.getItem( 'tasks' ) ));

    if ( localStorage.getItem('tasks') === null ) {

        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify( tasks ));

    } else {

        let tasks = JSON.parse( localStorage.getItem( 'tasks' ));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    getTasks();

    e.preventDefault()

}

function getTasks() {

    let tasks = JSON.parse ( localStorage.getItem('tasks') );
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = "";

    for ( let i = 0; i < tasks.length; i++ ) {

        console.log( tasks[i] );

        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-3">

            <div class="card-body">

                <p> ${title} - ${description} </p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">
                    Delete
                </a>

            </div>

        </div>`;

        /*
        tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;*/

    }
}

function deleteTask(title) {

    // console.log(title);

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for ( let i = 0; i < tasks.length; i++ ) {
      if ( tasks[i].title == title ) {
        tasks.splice( i, 1);
      }
    }

    localStorage.setItem( 'tasks' , JSON.stringify (tasks) );

    getTasks();
}

getTasks();
