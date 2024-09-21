
function main()
{
    
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      let input = [];
      
      rl.on('line',(line) => {
        input.push(line);

        if(input.length === 3)
        {
            const blockA = input[0].split(' ').map(Number);
            const blockB = input[1].split(' ').map(Number);
            const blockC = input[2].split(' ').map(Number);

            countZeroes(blockA);
            countZeroes(blockB);
            countZeroes(blockC);

            rl.close();
        }

      })

      function countZeroes(block)
      {
        let result =0;

        for(let i=0;i<4;i++)
        {
            if(block[i] == 0) result ++;
        }
        
        solution(result);
      }

      function solution(result)
      {
        let answer = '';

        if(result == 1) answer ='A';
        else if(result == 2) answer ='B';
        else if(result ==3) answer ='C';
        else if(result == 4) answer ='D';
        else {answer = 'E';}

        console.log(answer);

      }
}

main();