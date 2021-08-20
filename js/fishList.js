import { getFish } from "./FishData.js"

import { Fish } from "./fish.js"


/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = getFish()

    let fishHTMLrepre = ""

    for(const oneThing of fishes)
    {
      fishHTMLrepre +=  Fish(oneThing)
    }



    // Add to the existing HTML in the content element
    contentElement.innerHTML += `${fishHTMLrepre}`


}