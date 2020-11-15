/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18 

if (votingAge => 18) {
    console.log(true)
} else {
    console.log('Not old enough')
} 

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let a = 1
let b = 1

if (a === b){
    b = 2
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let num = Number("1999")
console.log(num)



//Task d: Write a function to multiply a*b 

let c = 2
let d = 4

function mulTwoNums (c, d) {
    return c * d;
  }
  
console.log(mulTwoNums(2,4))
  



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let num1 = 32
function mulTwoNums (a) {
  return (a * 7)
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

let weight = prompt("How many pounds does your dog weigh?");
    let age = prompt("How old is your dog? Whole number if over 1 year. If puppy round to nearest quarter year, .25 for 3 months, .5 for six months, .75 for 9 months.");



function howMuchFood() {
    

if (weight <= 5 && age >= 1){
    console.log('Your dog weighs' + weight + 'pounds!' + 'Dog should eat' + weight*.05 + 'pounds of food every day!')
} else if (weight <= 10 && age >= 1){
    console.log('Your dog weighs' + weight + 'pounds!' + 'Dog should eat' + weight*.04 + 'pounds of food every day!')
} else if(weight <= 15 && age >= 1){
    console.log('Your dog weighs' + weight + 'pounds!' + 'Dog should eat' + weight*.03 + 'pounds of food every day!')
} else if (weight >= 15 && age >= 1){
    console.log('Your dog weighs' + weight + 'pounds!' + 'Dog should eat' + weight*.02 + 'pounds of food every day!')
} else if (weight >= 5 && age <= .25){
    console.log('Your dog weighs' + weight + 'pounds!' + 'Dog should eat' + weight*.10 + 'pounds of food every day!')
} else if (weight >= 5 && age <= .5){
    console.log('Your dog weighs' + weight + 'pounds!' + 'Dog should eat' + weight*.05 + 'pounds of food every day!')
} else if (weight >= 5 && age <= .75){
    console.log('Your dog weighs' + weight + 'pounds!' + 'Dog should eat' + weight*.04 + 'pounds of food every day!')
}
}
  
console.log(howMuchFood())
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const rock = 0
const paper = 1
const scissors = 2

const player1 = prompt("rock, paper, scissors")
const computer = Math.floor(Math.random() * 3)

function game(player1, computer){
   



//if (player1 === 0){
  //  return 'rock';
//} else if (player1 === 1){
  //  return 'paper';
//} else if (player1 === 2){
  //  return 'scissors';
//}

if (computer === 0){
    return 'rock';
} else if (computer === 1){
    return 'paper';
} else if (computer === 2){
    return 'scissors';
}
}

console.log(game(player1, computer))

function playGame(game){

if (player1 === computer){
    return 'Tie';
} else if (player1 === 0 && computer === 1){
    return 'Paper wins';
} else if (player1 === 0 && computer === 2){
    return 'Rock wins';
} else if (player1 === 1 && computer === 0){
    return 'Paper wins';
} else if (player1 === 1 && computer === 2){
    return 'Scissors wins';
} else if (player1 === 2 && computer === 0){
    return 'Rock wins';
} else if (player1 === 2 && computer === 1){
    return 'Scissors wins';
}
}

console.log(playGame(game(player1, computer)))
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function KmToMiles(km){
    return km * 1.609;
}

console.log(KmToMiles(2))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(ft){
    return ft * 30.48;
}

console.log(feetToCm(2))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(i) {
    for (let i = 15; i > 0; i--){
        return `${i} of soda on the wall, ${i} of soda! Take one down, pass it around. ${i - 1} bottles of soda on the wall!`
    }
}

console.log(annoyingSong(15))

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalc(score){
    if (score < 60){
        return 'F';
    } else if (score >= 60 && score < 70){
        return 'D';
    } else if (score >= 70 && score < 80){
        return 'C';
    } else if (score >= 80 && score < 90){
        return 'B';
    } else if (score >= 90){
        return 'A';
    }
}

  console.log(gradeCalc(82))
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





