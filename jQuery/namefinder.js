var text = "fdjksf dajdkfjdksfa ldkeioE heather djdkdsjdfksal \
dfjdkaldjf  heather dkdajfkdlsjfdk";
var myName = "heather";
var hits = [];

for (var i = 0; i< text.length; i++) {
    if (text[i] === "h"){
        for (var j = i; j < (j + myName.length); j++) {
            hits.push(text[j]);
         
        }
        }
    else {
        
        }
        
    
    };

