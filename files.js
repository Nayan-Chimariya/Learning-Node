//fs is a builtin module that is required for file handling
const file = require("fs");

//sync file writing
// file.writeFileSync("test.txt","Creting files using fs module");

//async file writing
//file.writeFile("test.txt","test for async data writing", (err)=> {});

//sync file read
// result = file.readFileSync("./test.txt","utf-8")
// console.log(result)

//async file read
// file.readFile("./test.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error ",err);
//     } else{
//         console.log(result);
//     }
// });

// //appending file
// file.appendFileSync("./test.txt","appended txt\n")

//copying file
file.copyFileSync("./test.txt","./copied.txt");

//deleting a file (unlinking a file)
file.unlinkSync("./copied.txt");
