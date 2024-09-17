let text = prompt("Metn daxil edin");
let name = text.replace(/[^0-9]/gi,"");

for(let i = 0; i< name.length;i++){
    
    switch(name[i]){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        console.log("reqem var");
        break;
        default:
        console.log("reqem yoxdur");
        break;
            
        
    }
    
}