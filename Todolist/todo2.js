let container={
    construct:function(){
      this.selectElements();
      this.bindEvents();
      this.scanTaskList();
    },
    selectElements:function() {
        this.taskInput=document.getElementById('add_row');
        this.taskList=document.getElementById('list');
        this.taskListChildren=this.taskList.children;
        this.addBtn=document.getElementById('btn');
        this.errorMsg=document.getElementById('error')
    },
    builder:function () {
        let taskListItem,taskCheckbox,taskValue,taskButton,taskTrash;
        taskListItem=document.createElement("li");
        taskListItem.setAttribute('class','lists');
        //checkbox
        taskCheckbox=document.createElement('input');
        taskCheckbox.setAttribute('type','checkbox');
        //taskValue
        taskValue=document.createTextNode(this.taskInput.value);
        //delete
        taskButton=document.createElement("button");
        //trash
        taskTrash=document.createElement('i');
        taskTrash.setAttribute('class','fa fa-trash');
        //taskTrash.style.backgroundImage='url("images/rubbish .jpg")';
        //insert trash can icon into the btn
        taskButton.appendChild(taskTrash);
        //append elements to taskList
        taskListItem.appendChild(taskCheckbox);
        taskListItem.appendChild(taskValue);
        taskListItem.appendChild(taskButton);
        //add lists to list
        this.taskList.appendChild(taskListItem);
    },
    error: function() {
        this.errorMsg.style.display="block";

    },
    addTask: function(){
        let taskValue=this.taskInput.value;
        this.errorMsg.style.display="none";

        if(taskValue===""){
            this.error();
        }
        else{
            this.builder();
            this.taskInput.value="";
            this.scanTaskList();
        }
    },
    enterKey: function(event){
        if(event.keyCode===13|| event.which===13)
        {
            this.addTask();
        }
    },
    bindEvents: function () {
        //add click event
        this.addBtn.onclick=this.addTask.bind(this);
        // add enter key to task box
        this.taskInput.onkeypress=this.enterKey.bind(this);
    },
    scanTaskList: function () {
        let taskListItem,checkBox,deleteButton;
        //loop through all list elements
        for(i=0;i<this.taskListChildren.length;i++){
            taskListItem=this.taskListChildren[i];
            //delete button
            checkBox=taskListItem.getElementsByTagName('input')[0];
            deleteButton=taskListItem.getElementsByTagName('button')[0];

            //click chbox
            checkBox.onclick=this.completeTask.bind(this, taskListItem,checkBox);
            //to delete
            deleteButton.onclick=this.deleteTask.bind(this,i);
        }
    },
    deleteTask:function (i) {
        this.taskListChildren[i].remove();
        this.scanTaskList();
    },
    completeTask:function (taskListItem,checkBox) {
        if(checkBox.checked){
            taskListItem.style.textDecoration = "line-through";
            taskListItem.className="task completed";

        }else{
            this.incompleteTask(taskListItem);
        }
    },
    incompleteTask:function (taskListItem) {
        taskListItem.className='lists';
    }
};