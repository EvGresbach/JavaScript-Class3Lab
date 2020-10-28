$(document).ready(
    function()
    {
        //event handlers
        $("#libraryFeeButton").click(calculateLateFee);
        $("#pizzaPerPersonButton").click(calculatePizzaPerPerson)

        //other functions
        function calculateLateFee()
        {
            // get number of late books and convert to number
            var numLateBooks = parseInt($("#numLateBooks").val());

            // get number of late DVDs and convert to number
            var numLateDVDs = parseInt($("#numLateDVDs").val());

            // get the number of days late the items are and convert to number
            var dayslate = parseInt($("#daysLate").val());

            //Multiply bookLateFee by lateBooks and daysLate
            const lateBookFee = .25;
            var costLateBooks = lateBookFee * numLateBooks * dayslate;

            //Multiple dvdLateFee by lateDVDs and daysLate
            const lateDVDFee = .5;
            var costLateDVDs = lateDVDFee * numLateDVDs * dayslate;

            //Add the fees
            var totalLateFee = costLateBooks + costLateDVDs;

            //print the total fee
            $("#libraryFeeOutput").text(`Your late fee is $${totalLateFee}`);
            $("#libraryFeeOutput").show();

        }
        function calculatePizzaPerPerson()
        {
            // get number of people and convert
            var numPeople = parseInt($("#numPeople").val());

            // get number of pizzas and convert
            var numPizzas = parseInt($("#numPizzas").val());

            // get average number of toppings per pizza and convert
            var avgNumToppings = parseInt($("#avgNumToppings").val());

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
            $("#pizzaPerPersonOutput").text(`It will be $${costPerPerson.toFixed(2)} per person.`);
            $("#pizzaPerPersonOutput").show();

        }
    }
);




