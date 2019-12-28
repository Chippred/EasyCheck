//===========================================
//=========     Functions      ==============
//===========================================



//====================================





function checkboxes() {
    var inputElems = document.getElementsByTagName("input"),
        count = 0;

    for (var i = 0; i < inputElems.length; i++) {
        if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
            count++;   
        }
    }

    
    var amount = document.getElementsByClassName("CheckBox").length;
    var Presentage = count / amount * 100;
    var Scale = Presentage + "%";

    //Tasks Finished code
    

    
    //=====================

    console.log(Scale);

    document.getElementById("Progress_Green").style.width = Scale;

    if (Presentage === 100){ document.getElementById("AllCheckedScreen").style.display = "block";
    document.getElementById("MessageCard").style.animation = "DoneSliding 0.25s ease-in forwards";
    }
}




function Dismiss(){    
    setTimeout(function(){document.getElementById("AllCheckedScreen").style.display = "none";},0);
    
    //document.getElementById("AllCheckedScreen").style.animation // = "DismissFade 0.25s ease-in forwards";
}





function add() {



    
    var amount = document.getElementsByTagName("input").length;
    document.getElementById('tag-id').innerHTML += 
        
        '<div class="Card_Row">'+
            '<div class="Task_Card">'+

                '<div class="ColorMeny">'+
                    '<button class="ChangeColor"></button>'+
                    '<button class="ColorButton" id="Pink"></button>'+
                    '<button class="ColorButton" id="Blue"></button>'+
                    '<button class="ColorButton" id="Orange"></button>'+
                    '<button class="ColorButton" id="Green"></button>'+
                    '<button class="ColorButton" id="Purple"></button>'+
                    '<button class="ColorButton" id="Yellow"></button>'+
                '</div>'+
                
                
                '<form id="form" onsubmit="return false;">'+
                    '<input  type="text" id="TaskTitle" name="Title" />'+
                    '<input  type="text" id="TaskDescription" name="Description" />'+
                    '<input value="Done" type="submit" id="SaveText" onclick="AddText()" />'+
               '</form>'+

            '</div>'+
            
            
            '<div class="Switch_Card">'+
                '<input type="checkbox" name="checkbox" class="CheckBox" id="checkbox_' + amount + '"'+ 'value="value"' + 'onclick="checkboxes()">'+
                '<label class="switch" for="checkbox_' + amount + '">'+
                    '<div class="circle_Switch"></div>'+
                '</label>'+
            '</div>'+
            
            
                 '<button onclick="RemoveTask()" class="delete"></button>'+
        '</div>'+
    '</div>';

        
        
};

function AddText() {

    var Title = document.getElementById("TaskTitle").value;
    var Description = document.getElementById("TaskDescription").value;
   // alert(Title + Description);
    
    document.getElementById("TaskTitle").innerHTML = "<h1>"+ Title + "</h1>"
    
    
//==================      __      ============================
//==================      ||  
// Stackoverflow fix      ||       //If er om outer.html er 
//==================     \\//     supported. Else er fallback.
//==================      \/      ============================
    
   
    
//=============      TaskTitle   ============
//===========================================
    
    
    
var Obj = document.getElementById('TaskTitle'); //any element to be fully replaced
if(Obj.outerHTML) { //if outerHTML is supported
    Obj.outerHTML='<h1>' + Title + '</h1>'; ///it's simple replacement of whole element with contents of str var
}
else { //if outerHTML is not supported, there is a weird but crossbrowsered trick
    var tmpObj=document.createElement("div");
    tmpObj.innerHTML='<input  type="text" id="TaskTitle" name="Title" />';
    ObjParent=Obj.parentNode; //Okey, element should be parented
    ObjParent.replaceChild(tmpObj,Obj); //here we placing our temporary data instead of our target, so we can find it then and replace it into whatever we want to replace to
    ObjParent.innerHTML=ObjParent.innerHTML.replace('<div><input  type="text" id="TaskTitle" name="Title" /></div>',Title)}
    
    
    
//=============      TaskDescription   ============
//=================================================
    
    
 
var Obj2 = document.getElementById('TaskDescription'); //any element to be fully replaced
if(Obj2.outerHTML) { //if outerHTML is supported
    Obj2.outerHTML='<p>' + Description + '</p>'; ///it's simple replacement of whole element with contents of str var
}
else { //if outerHTML is not supported, there is a weird but crossbrowsered trick
    var tmpObj2=document.createElement("div");
    tmpObj2.innerHTML='<input  type="text" id="TaskDescription" name="Description" />';
    ObjParent2=Obj2.parentNode; //Okey, element should be parented
    ObjParent2.replaceChild(tmpObj2,Obj2); //here we placing our temporary data instead of our target, so we can find it then and replace it into whatever we want to replace to
    ObjParent2.innerHTML=ObjParent2.innerHTML.replace('<div><input  type="text" id="TaskDescription" name="Description" /></div>',Description)};
    
    
 document.getElementById("SaveText").remove();   
};


function RemoveTask() {

    var btn = document.getElementsByClassName('delete')

for (var o = 0; o < btn.length; o++) {
  btn[o].addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
    //this.closest('.single').remove() // in modern browsers in complex dom structure
    //this.parentNode.remove(); //this refers to the current target element 
    //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }, false);
}
    
}
