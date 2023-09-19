export class Game{
    name = "";
    amount = 0.00;
    numberOfBalls = 0;
    points  = 0;
    gain  = 0.00;
    bet = [];
    fixedBalls = [];
    randomBalls = [];

    //Lotofacil
    numberMax = 25;

    constructor(name, numberOfBalls){
        this.name = name;
        this.numberOfBalls = numberOfBalls;
    }

    randomGame(){
        while (this.bet.length < this.numberOfBalls){
            let tempBall = Math.floor(Math.random() * (this.numberMax - 1) + 1);

            if(!this.bet.find((element)=> element == tempBall)){
                console.log("Setando valor "+tempBall);
                this.bet.push(tempBall);
            }
        }
    }

}