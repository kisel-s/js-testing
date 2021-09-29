var sum1=0;
var sum2=0;
const maxValue = 6;
function getRundom(max){
    return Math.floor(Math.random() * max + 1);
}

for(let i = 3; i>0;i--){
    sum1 +=getRundom(maxValue);
    sum2 +=getRundom(maxValue);
}

if(sum1 > sum2){
    console.log('Player 1 win! Player 1  sum "' + sum1 + '" is greater than Player 2  sum "' + sum2 + '"');
}
else if(sum1 < sum2){
    console.log('Player 2 win! Player 1  sum "' + sum1 + '" is less than Player 2  sum "' + sum2 + '"');
}
else{
    console.log('A drawn game');
}

