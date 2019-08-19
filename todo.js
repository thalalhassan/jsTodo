$.ajax({
    type: "Get",
    url: "https://jsonplaceholder.typicode.com/todos",
    dataType: "json",
    success: function(data) {
        data.forEach(function(task){
            let todo = `<li class="list" id="${task.id}"><label class="checkbox col-md-8">${task.title}<input type="checkbox" id="check${task.id}"><span class="checkmark"></span></label></li>`;
            $('#todoList').append(todo);
            if (task.completed == true) {
//                 $(`#check${task.id}`).attr('checked', '').attr('disabled', '');
                   document.getElementById("check"+task.id).disabled = true;
                   document.getElementById("check"+task.id).checked = true;
            }

        });
    },
    error: function(){
        alert("File not found ");
    }
});

let count = 0;
let promise = new Promise(function(resolve, reject){
    setTimeout(function() {
                $('#todoList li input').on('change', (e) => {
            if (e.target.checked == true) {
                count++;
                if (count == 5) {
                    resolve('Congrats... 5 Tasks have been Successfully Completed ');
                }
            }
            else {
                count--;
            }
        })
    }, 500);
});

promise.then((value) => {
    alert(value);
});
