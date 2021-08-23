
const fishCollection = [


    {
        name: "Bart",
        food: "Crustaceans",
        image: "15.jpg",
        species: "tigger",
        length: 3,
        waterType: "salt",
        harvestLoaction: "Florida"
    },


    {
        name: "Bart",
        food: "Crustaceans",
        image: "15.jpg",
        species: "tigger",
        length: 20,
        waterType: "salt",
        harvestLoaction: "Florida"
    },


    {
        name: "Nemo",
        food: "Goldfish",
        image: "3.jpg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestlocation: "Florida"
    },


    {
        name: "Don Julio",
        food: "snails",
        image: "4.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"

    },


    {
        
        name: "Eleanor",
        species: "Angler",
        image: "5.jpg",
        length: 15,
        harvestLocation: "North Carolina",
        waterType: "Fresh",
        diet: "everything"
    },


    {
        name: "Jeff",
        food: "Forage Fish",
        image: "6.jpg",
        species: "Bluefish",
        length: 25,
        waterType: "Salt",
        harvestLocation: "Australia"
    },



    {
        name: "Karen",
        food: "Algae",
        image: "7.png",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt", 
        harvestLocation: "Puerto Rico"

    },


    {
        name: "Robin Gilliams",
        food: "Bee Moths",
        image: "8.jpg",
        species: "Clownfish",
        length: 7,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },


    {
        name: "Gordon",
        food: "Krill",
        image: "12.jpg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    },


    {
        name: "Bloat",
        food: "shrimp",
        image: "13.jpg",
        species: "Blow Fish",
        length: 30,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },



    {
        name: "Marlin",
        food: "Mealworms",
        image: "14.jpg",
        species: "clownfish",
        length: 4,
        waterType: "Saltwater",
        harvestLocation: "Bahamas"
    },


   {    name: "Ted",
        food: "Perch",
        image: "15.jpg",
        species: "Tiger Trout",
        length: 14,
        waterType: "Fresh",
        harvestLocation: "North America"
}



]


export const getFish = () =>
{
    return fishCollection;
}







 export const returnEvenNumbers = () =>
{

    const arrayOfFishes = [];

    for(const tacoTuesday of fishCollection)
    {
        if(tacoTuesday.length % 3 === 0)
        {
            arrayOfFishes.push(tacoTuesday);
        }
    }

    return arrayOfFishes
}






export const getSoldierFish = () =>
{
    const soldierFishes = [];

    for(const strongSniperFish of fishCollection)
    {
        if(strongSniperFish.length % 3 ===0)
        {
            strongSniperFish.push(soldierFishes)
        }
    }

    return soldierFishes
}





export const unWorthyFish = () =>
{
    const notImportantFishes = [];

    for(const onSalesFishes of fishCollection)
    {
        if((onSalesFishes.length % 3) !==0 && (onSalesFishes.length % 5) !== 0)
        {
            notImportantFishes.push(onSalesFishes)
        }
    }

    return notImportantFishes
}