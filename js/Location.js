
const locations = 
[
    {
        location: "Congo"
    },
    

    {
        location: "Costa Rica"
    },

    {
        location: "Angola"
    },

    {
        location: "Guatemala"
    },

    {
        location : "Brazil"
    }
] 


const places = () =>
{
    return locations;
}


const accessPlaces = (pl) =>
{
    //pl now is holding the array locations items and accessing the array
    return `<h1>${pl.location}</h1>`
}




export const loop = () =>
{
    const accessHTML = document.querySelector('.collection-location')
    const loopThroughtArray = places()

    //CREATES A VARIABLE AND ASSIGN ALL THE array LOCATIONS LOOP TO THE VARIABLE
    let lastLoca = ""

    for(const lp of loopThroughtArray)
    {
        //accessPlaces is now holding all the array locations items
        lastLoca+=accessPlaces(lp)
    }

    accessHTML.innerHTML+=`${lastLoca}`
}