
    function myFunction(){
        var name=document.getElementById("name");
        var classes=document.getElementById("class");
        var math=parseInt(document.getElementById("math").value);
        var sociology=parseInt(document.getElementById("sociology").value);     
        var english=parseInt(document.getElementById("english").value);
        var digitallogic=parseInt(document.getElementById("digitallogic").value);
        var computer=parseInt(document.getElementById("computer").value);
        var marks,percentage;
        introduction=`<h1>hello ${name.value} your grade is below:</h1>`;
        marks=math+sociology+english+digitallogic+computer;
        let totalmarks=500;
        percentage=parseInt((marks/totalmarks)*100);
        if (percentage == 40 || percentage<=49){
            document.getElementById("remarks").innerHTML="E";
        }else if(percentage ==50 || percentage<=54){
            document.getElementById("remarks").innerHTML="D";
        }
        else if(percentage==55 || percentage<=59){
            document.getElementById("remarks").innerHTML="D+";
        }
        else if(percentage==60 || percentage<=64){
            document.getElementById("remarks").innerHTML="C";
        }
        else if(percentage==65 || percentage<=69){
            document.getElementById("remarks").innerHTML="C+";
        }
        else if(percentage==70|| percentage<=74){
            document.getElementById("remarks").innerHTML="B";
        }
        else if(percentage==75|| percentage<=79){
            document.getElementById("remarks").innerHTML="B+";
        }
        else if(percentage==80 || percentage<=89){
            document.getElementById("remarks").innerHTML="A";
        }
        
        else if(percentage==90|| percentage<=100){
            document.getElementById("remarks").innerHTML="A+";
        }
        else{
            document.getElementById("remarks").innerHTML="INVALID"
        }
        

        
        
        document.getElementById("demo").innerHTML=introduction;
        document.getElementById("percentage").innerHTML=percentage;
    }