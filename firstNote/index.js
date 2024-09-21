function main ()
{
    let answer =0;
    //3의 배수를 듣는 콜백함수
    function add(i)
    {
        answer += i;
        
    }
    
    function solution(callback)
    {

        for(let i=1; i<11;i++)
        {
            if(i%3==0)
            {
                callback(i);
            }
        }
        //1-10출력
        //3의 배수면 콜백함수를호출 
    }

    solution(add);
    //콜백함수를 이용해서 3의배수를 다 더한값 출력
    console.log(answer);
}

main();