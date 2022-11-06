const toggle=document.getElementById('toggle');
const content=document.getElementById('content');
const x=document.getElementById('mysearch');


toggle.addEventListener("click",changebutton);
function changebutton(){
    
    var element=document.body;
    element.classList.toggle("dark-mode");
}
const myfunction =() =>{
    let filter=document.getElementById('mysearch').value.toUpperCase();
    let a=document.getElementsByTagName('a');
    for(var i=0;i<a.length;i++){
        let ancor=a[i];
        let textValue=ancor.textContent ;
        if(textValue.toUpperCase().indexOf(filter)>-1){
            a[i].style.display='';
        }else{
            a[i].style.display='none';
        }
    }
}