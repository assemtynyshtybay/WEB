


var todolist=[];
if(localStorage.getItem('todo')!=undefined){
    todolist=JSON.parse(localStorage.getItem('todo'));
    list();
}
document.getElementById('btn').onclick=function(){
    var d=document.getElementById('add_row').value;
    //{todo:Add bread, check:false}
    var temp={};
    temp.todo=d;
    temp.check=false;
    var i=todolist.length;
    todolist[i]=temp;
    console.log(todolist);
    list();
    localStorage.setItem('todo', JSON.stringify(todolist));
}

function list(){
    var list='';
    for(var key in todolist){
        if(todolist[key].check==true){
            list='<input type="checkbox" class="box" checked>';
        }
        else {
            list+='<input type="checkbox" class="box">'
        }
        list+=todolist[key].todo+'<br>';

    }
    document.getElementById('list').innerHTML=list;
}