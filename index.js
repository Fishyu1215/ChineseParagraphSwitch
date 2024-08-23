//var text1 = document.getElementById("inputtext").value;     // plain JavaScript
//var text2 = $("#myTextArea").val(); 
//document.getElementById('myTextArea').value = text1;   // plain JavaScript
// $("#myTextArea").val('new value'); 


function myFunction(){
    var text1 = document.getElementById("inputtext").value;  
    //document.getElementById("outputtext").value = newtemp;
    //alert(text1);



    let maxLeng=0;
    let templeng=0;
    let line=1;
    let content=[];
    let temp=[];
    for (i=0;i<text1.length;i++){
        if(i==text1.length-1){
            temp.push(text1[i]);
            content.push(temp);
            if(templeng>maxLeng){
                maxLeng=templeng;
            }
            templeng=0;
            temp=[];
            break;
        }else
        if(text1[i]=='\n'){
            
            content.push(temp);
            temp=[];
            if(templeng>maxLeng){
                maxLeng=templeng;
            }
            templeng=0;
            line++;


        }else{
            temp.push(text1[i]);
            templeng++;
            //console.log(JSON.stringify(temp));
        }

    }

    //content.forEach((element) => console.log(JSON.stringify(element)));
//console.log(JSON.stringify(content));


let newline=[];
let newtemp=[];

for(j=0;j<=maxLeng;j++){

    for(i=line-1;i>=0;i--){
        if(content[i][j]==undefined||content[i][j]==" "){
            newtemp.push("　");
        }else{
        newtemp.push(content[i][j]);
        }
    }
    newtemp.push('\n');
    newline.push(newtemp.join(""));
    //console.log(JSON.stringify(newtemp));
    newtemp=[];

}

//console.log(JSON.stringify(newline));

document.getElementById("outputtext").value = newline.join("");
}

