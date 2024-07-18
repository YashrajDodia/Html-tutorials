const { error } = require('console');
const fs = require('fs');
// fs.exists('demo20.js', (exists)=>{
//     console.log(exists?'yes file is there':"file not found");
// });


//Synchronus Method
// const data = fs.readFileSync('text.txt');
// console.log(data.toString());

//Asynchronus Method
// fs.readFile('text.txt' ,(err,data)=>{
//     console.log(data.toString());
// });

//to delete file using fs
// fs.unlink('text.txt', (err)=>{
//     if(err){
//         throw error;
//     }else{
//         console.log('File deleted');
//     }
// });

//to rename file using fs module 
//it will delete old file and will create new file with given name 
// fs.rename('DemoText.txt', 'Text.txt',(err)=>{
//     if(err){
//         throw error;
//     }else{
//         console.log('File renamed');
//     }
// });

//to copy file from one file
    // fs.copyFile('demotext.txt', 'Text.txt',(err)=>{
    //     if(err){
    //         throw error;
    //     }else{
    //         console.log('File copied');
    //     }
    // });

//to append something in file

// fs.appendFile('demotext.txt', 'Hello Duniya',(err)=>{
//         if(err){
//             throw error;
//         }else{
//             console.log('text apended in file');
//         }
//     });

    const os = require('os');

    console.log('Platform:', os.platform());
    console.log('Hostname:', os.hostname());
    console.log('Total Memory:', os.totalmem() / (1024 * 1024), 'MB');
    console.log('Free Memory:', os.freemem() / (1024 * 1024), 'MB');
    console.log('CPUs:', os.cpus().length);
    console.log('Network Interfaces:', os.networkInterfaces());
    console.log('Uptime:', os.uptime(), 'seconds');

    // 1214249.031 seconds
