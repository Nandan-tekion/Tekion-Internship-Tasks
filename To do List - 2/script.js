buttonCLick('high','hp');
buttonCLick('medium','mp');
buttonCLick('low','lp');

function buttonCLick(buttonId , listId){
    document.getElementById(buttonId).addEventListener('click', function (e) {

        let task = document.getElementById('data').value;

        if(task === ""){
            alert("Please enter a task");
            return;
        }

        let list = document.getElementById(listId);
        let taskList = document.createElement('div');
        let taskName = document.createElement('input');
        taskName.type = "text";
        let del = document.createElement('button');
        
        del.classList.add('btn');
        taskName.value = task;
        taskName.setAttribute("readonly", "true");
        del.innerHTML = "Done";


        del.addEventListener('click', function (e) {
            if(confirm("Are you sure you are done with task " + taskList.firstChild.value))taskList.remove();
           
            if(!document.getElementById('hp').hasChildNodes() && !document.getElementById('mp').hasChildNodes() && !document.getElementById('lp').hasChildNodes()){
            document.getElementById('no-task').hidden = false;
            document.getElementById('some-task').hidden = true;
            }
         });
        
        taskList.appendChild(taskName);
        taskList.appendChild(del);
        list.appendChild(taskList);
        taskList.draggable = true;
        taskList.classList = list.classList;
        taskList.classList.add('draggable');
        taskList.classList.remove('container');
        document.getElementById('data').value = "";
        document.getElementById('no-task').hidden = true;
        document.getElementById('some-task').hidden = false;

        taskList.addEventListener('dragstart', function(e) {
            taskList.classList.add('dragging');
            taskList.classList.remove(taskList.parentNode.classList[0]);
        });

        taskList.addEventListener('dragend', function(e) {
            taskList.classList.remove('dragging');
            taskList.classList.add(taskList.parentNode.classList[0]);
        });
    });
}

let containers = document.querySelectorAll('.container');

containers.forEach(function(container1) {
    container1.addEventListener('dragover',(e)=>{
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container1.appendChild(draggable);
    });
});



// Practice

//const tableType = document.createElement("table");

//console.log(document.querySelectorAll('div'));


//let timerId = setInterval(() => {console.log("Function ran")},1000)



// async function demo(){
//     return "Async Functions";
// }
// demo().then(function(ouput){
//     console.log(ouput);
// })

// const sampeArr = [1,2,4,5,78];

// const obj = {...sampeArr};

// console.log(obj);

