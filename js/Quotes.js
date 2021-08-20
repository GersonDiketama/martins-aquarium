

const quotes = 
[
    {
        location: "Costa rica",
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero molestias, tempora aliquid asperiores eligendi, id praesentium voluptates laboriosam numquam, consequuntur tenetur recusandae nemo iste neque nesciunt deleniti culpa amet."
    },

    {
        location: "Angola",
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero molestias, tempora aliquid asperiores eligendi, id praesentium voluptates laboriosam numquam, consequuntur tenetur recusandae nemo iste neque nesciunt deleniti culpa amet."
    },

    {
        location: "Mexico",
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero molestias, tempora aliquid asperiores eligendi, id praesentium voluptates laboriosam numquam, consequuntur tenetur recusandae nemo iste neque nesciunt deleniti culpa amet."
    },


    {
        location: "Brazil",
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero molestias, tempora aliquid asperiores eligendi, id praesentium voluptates laboriosam numquam, consequuntur tenetur recusandae nemo iste neque nesciunt deleniti culpa amet."
    },



    {
        location: "Belice",
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero molestias, tempora aliquid asperiores eligendi, id praesentium voluptates laboriosam numquam, consequuntur tenetur recusandae nemo iste neque nesciunt deleniti culpa amet."
    },


    {
        location: "France",
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero molestias, tempora aliquid asperiores eligendi, id praesentium voluptates laboriosam numquam, consequuntur tenetur recusandae nemo iste neque nesciunt deleniti culpa amet."
    }
]




const allQuotes = () =>
{
    return quotes;
}


const quotesAccess = (al) =>
{
    return `<article class="">
    <h3 class="">${al.location}</h3>
    <ul>
        <li class="">${al.quote}</li>
    </ul>
</article>`
}



export function displayQuotes()
{
    const list = document.querySelector('.Travel-Quotes');
    const all = allQuotes()

    let display = ""

    for (const items of all)
    {
      display+=quotesAccess(items)
    }

    list.innerHTML+=`${display}`
}