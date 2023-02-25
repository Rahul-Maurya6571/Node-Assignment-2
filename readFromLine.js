let rl=require('readline')
let prompts= rl.createInterface(process.stdin, process.stdout);
prompts.question("Please Enter Your Name: ", function (exp){
    let msg="";
 if(exp === "")
    msg = "You didn't Provide any input";

 else
    msg = `Hello ${exp}`

 
 console.log(msg)
 process.exit();
})
