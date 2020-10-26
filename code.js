function calculateLateFee()
{
    // get number of late books and convert to number
    var numLateBooks = parseInt(prompt("How many books are late?"));

    // get number of late DVDs and convert to number
    var numLateDVDs = parseInt(prompt("How many DVDs are late?"));

    // get the number of days late the items are and convert to number
    var dayslate = parseInt(prompt("How many days are they late?"));

    //Multiply bookLateFee by lateBooks and daysLate
    const lateBookFee = .25;
    var costLateBooks = lateBookFee * numLateBooks;

    //Multiple dvdLateFee by lateDVDs and daysLate
    const lateDVDFee = .5;
    var costLateDVDs = lateDVDFee * numLateDVDs;

    //Add the fees
    var totalLateFee = costLateBooks + costLateDVDs;

    //print the total fee
    alert(`Your late fee is $${totalLateFee}`);
}
function calculatePizzaPerPerson()
{
    // get number of people and convert
    var numPeople = parseInt(prompt("How many people in your group?"));

    // get number of pizzas and convert
    var numPizzas = parseInt(prompt("How many pizzas are you buying?"));

    // get average number of toppings per pizza and convert
    var avgNumToppings = parseInt(prompt("How many toppings on each pizza?"));

    // Multiply numberOfPizzas by costPerPizza
    const costPerPizza = 15;
    var costOfPizzas = costPerPizza * numPizzas;

    // multiply averageNumberOfToppings by numberOfPizzas for totalToppings
    var totalNumToppings = avgNumToppings * numPizzas;

    // multiple totalNumberOfToppings by costPerTopping for totalCostOfToppings
    const costPerTopping = 1.25;
    var costOfToppings = costPerTopping * totalNumToppings;

    // add totalCostOfPizza and totalCostOfToppings
    var totalCost = costOfPizzas + costOfToppings;

    //calculate and print cost per person
    var costPerPerson = totalCost/numPeople;
    alert(`It will be $${costPerPerson.toFixed(2)} per person.`)


}