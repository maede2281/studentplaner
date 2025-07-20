function addtask(){
    console.log("task functionality started.");
    const input=document.getElementById('taskinpute');
    const task=input.ariaValueMax.trim();

    if(task){
        const list = document.getElementById('tasklist');
        const li = document.createElement('li');
        li.textContent=task;
        list.appendChild(li);
        input.value='';
    }
}