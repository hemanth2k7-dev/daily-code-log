function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve("Step 1 done"),1000);
    });
}
function step2() {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 2 done")
        }, 1000);
    });
}

step1()
    .then(result=>{console.log(result)
    return step2();
})
    .then(result=>console.log(result));