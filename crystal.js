var userScore = 0;
var winCount = 0;
var loosCount = 0;
var targetScore = 0;

 var crystalGame = {
     getRandomNumber: function(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
     },

     
     targetGuessNumber: function(){
         var randomNumber = this.getRandomNumber(19,100);
         targetScore = randomNumber;
         $('#target-score').html(randomNumber);
     },

     blueGuessNumber: function(){
        var randomNumberBlue = this.getRandomNumber(1,12);
        let blue = document.querySelector('#blue');
        blue.dataset['blueNumber'] = randomNumberBlue;
        return randomNumberBlue;
    },
    greenGuessNumber: function(){
        var randomNumberGreen = this.getRandomNumber(1,12);
        let green = document.querySelector('#green');
        green.dataset['greenNumber'] = randomNumberGreen;
        return randomNumberGreen;
    },
    redGuessNumber: function(){
        var randomNumberRed = this.getRandomNumber(1,12);
        let red = document.querySelector('#red');
        red.dataset['redNumber'] = randomNumberRed;
        return randomNumberRed;

    },
    yellowGuessNumber: function(){
        var randomNumberYellow = this.getRandomNumber(1,12);
        let yellow = document.querySelector('#yellow');
        yellow.dataset['yellowNumber'] = randomNumberYellow;
        return randomNumberYellow;

    },

    showUserScore:function(){
        document.querySelector('#your-score').innerHTML = userScore;
    },

    checkScore: function(){
        if(userScore == targetScore){
            winCount ++;
            $('#win-count').html(winCount);
            this.resetGame();
            this.restart();

        }else if(userScore > targetScore){
            loosCount ++;
            $('#loss-count').html(loosCount);
            this.resetGame();
            this.restart();
         }
    },
    restart: function(){
        numBlue = crystalGame.blueGuessNumber();
        console.log(numBlue);
        numGreen = crystalGame.greenGuessNumber();
        console.log(numGreen);
        numRed = crystalGame.redGuessNumber();
        console.log(numRed);
        numYellow = crystalGame.yellowGuessNumber();
        console.log(numYellow);
    },
    resetGame: function(){
        userScore = 0;
        document.querySelector('#your-score').innerHTML = '';
        let yellow = document.querySelector('#yellow');
        yellow.dataset['yellowNumber'] = '';
        let red = document.querySelector('#red');
        red.dataset['redNumber'] = '';
        let green = document.querySelector('#green');
        green.dataset['greenNumber'] = '';
        let blue = document.querySelector('#blue');
        blue.dataset['blueNumber'] = '';
        this.targetGuessNumber();

    },
 }

 crystalGame.showUserScore();
 crystalGame.targetGuessNumber();

 var numBlue = crystalGame.blueGuessNumber();
 var numGreen = crystalGame.greenGuessNumber();
 var numRed = crystalGame.redGuessNumber();
 var numYellow = crystalGame.yellowGuessNumber();

 

 $('#blue').click(function(){
    document.querySelector('#your-score').innerHTML = userScore += numBlue;
    console.log(numBlue);
    crystalGame.checkScore();
 });

 $('#green').click(function(){
    document.querySelector('#your-score').innerHTML = userScore += numGreen;
    console.log(numGreen );
    crystalGame.checkScore();
 });

 $('#red').click(function(){
    document.querySelector('#your-score').innerHTML = userScore += numRed;
    console.log(numRed);
    crystalGame.checkScore();
 });

 $('#yellow').click(function(){
    document.querySelector('#your-score').innerHTML = userScore += numYellow;
    console.log(numYellow);
    crystalGame.checkScore();
 });


