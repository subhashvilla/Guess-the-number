
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
 

document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.Guess').value);
        // console.log(guess, typeof guess)
        //   player enter input 
        if (!guess) {
            document.querySelector('.message').textContent = '🚫 no number entered!';

            // when players wins
        } else if (guess == secretnumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number';
            document.querySelector('.number').textContent = secretnumber;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            // when guess is too high
        } else if (guess > secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too High';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the Game 🙄'
                    ;
                document.querySelector('.score').textContent = 0;
            }

            //  when guess is too low
        } else if (guess < secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too low';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the Game 🙄';
                document.querySelector('.score').textContent = 0;
            }

        }
    }

); 

document.querySelector('.again').addEventListener(
    'click',function(){
         score = 20;
         secretnumber = Math.trunc(Math.random() * 20) + 1;
         document.querySelector('.message').textContent = 'starting guessing....';
        
         document.querySelector('.score').textContent = score;
         document.querySelector('.number').textContent='?';  
         document.querySelector('.Guess').value ='';
         document.querySelector('body').style.backgroundColor='#222';
         document.querySelector('.number').style.width='15rem';
    }
)