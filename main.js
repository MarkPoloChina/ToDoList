function del(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
           _parentElement.remove();
    }
}
function add(_element){
    var text = prompt("请输入清单项目");
    var newli = document.createElement('li');
    var newbox = document.createElement('input');
    newbox.type = "checkbox";
    var newitem = document.createElement('span');
    newitem.innerHTML = text;
    var newbtn = document.createElement('button');
    newbtn.id = "del";
    newbtn.setAttribute('onclick','del(this)');
    newbtn.innerHTML = "删除";
    newli.appendChild(newbox);
    newli.appendChild(newitem);
    newli.appendChild(newbtn);
    var tarul = document.getElementsByTagName('ul')[0];
    tarul.appendChild(newli);
}