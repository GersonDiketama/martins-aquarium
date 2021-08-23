import { getFish } from "./FishData.js"

import { Fish } from "./fish.js"

import { returnEvenNumbers } from "./FishData.js"

import { getSoldierFish } from "./FishData.js"

import { unWorthyFish } from "./FishData.js"


/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module


export const remainderFishes = () =>
{
    const displayMeFirstNeededFish = returnEvenNumbers();
    FishList(displayMeFirstNeededFish)

    const displaySniperFish = getSoldierFish()
    FishList(displaySniperFish)

    const dontSellFish = unWorthyFish()
    FishList(dontSellFish)
}




 const FishList = (allArrays) =>
 
 {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    

    let fishHTMLrepre = ""

    for(const oneThing of allArrays)
    {
      fishHTMLrepre +=  Fish(oneThing)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `${fishHTMLrepre}`
  

}