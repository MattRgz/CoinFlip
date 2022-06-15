function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount<5){
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result ==="heads"){
                headsCount++;
            }else {
                headsCount=0;
                if(attempts>100){
                    return(
                        reject(console.log('It tooks more than 100 tries to flip five "heads"'))
                    )
                }
            }
        }
        resolve(console.log(`It tooks ${attempts} tries to flip five "heads"`));
    })
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
console.log(Promise.reject)