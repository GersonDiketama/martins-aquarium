
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
    return `<h1>${pl.location}</h1>`
}




export const loop = () =>
{
    const accessHTML = document.querySelector('.collection-location')
    const loopThroughtArray = places()

    let lastLoca = ""

    for(const lp of loopThroughtArray)
    {
        lastLoca+=accessPlaces(lp)
    }

    accessHTML.innerHTML+=`${lastLoca}`
}