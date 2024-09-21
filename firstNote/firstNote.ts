
//타입스크립트 콜백 : 1-10 중 짝수만 더해서 출력하기

var answer: number =0;

function selectEven(callback : Function) 
{
    for(let i=1;i < 10; i++)
    {
        if(i%2==0) callback(i);
        console.log(i);
    }
    
}

function addNumbers(i : number)
{
    answer += i;
}

function result()
{
    selectEven(addNumbers);
    console.log(answer);
}

result();
