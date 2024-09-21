function main() {
    const readline = require('readline');
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    let input = [];
    let minkookScores = [];
    let manseScores = [];
  
    // 입력을 한 줄씩 처리
    rl.on('line', (line) => {
      input.push(line);
  
      // 입력이 2줄이 되면 처리
      if (input.length === 2) {
        minkookScores = input[0].split(' ').map(Number);
        manseScores = input[1].split(' ').map(Number);
  
        rl.close();
        
        solution(add);
      }
    });
  
    function solution(callback) {
      callback();  
    }
  
    function add() {
      let minkuk = 0;
      let mansei = 0;
  
      
      for (let i = 0; i < minkookScores.length; i++) {  
        minkuk += minkookScores[i];
        mansei += manseScores[i];
      }
  
      let result;
  
      // 조건에 따른 결과값 설정
      if (minkuk > mansei) result = minkuk;
      else if (mansei > minkuk) result = mansei;
      else result = minkuk;
  
      console.log(result);
    }
  }
  
  main();
  