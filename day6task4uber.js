class Uber{
    constructor(distance, pricePerKM){
        this.distance=distance;
        this.pricePerKM=pricePerKM;
    }
    getDistance(){
        return this.distance;
    }
    getPricePerKM(){
        return this.pricePerKM;
    }
    calculatePrice(){
        return this.distance*this.pricePerKM;
    }
}

const ride1= new Uber(100,50);
console.log(`The price for the ride which travelled ${ride1.getDistance()} KMs with ${ride1.getPricePerKM()} Rs per KM is : ${ride1.calculatePrice()} Rs.`);

// output is
// The price for the ride which travelled 100 KMs with 50 Rs per KM is : 5000 Rs.
