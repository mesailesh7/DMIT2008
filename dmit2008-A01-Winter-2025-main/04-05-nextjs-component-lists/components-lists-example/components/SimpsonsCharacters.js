// copy the characters.
const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]

// create a component
// we're going to loop through all of the items
export default function SimpsonsCharacters() {
  // we're going to use our knowledge of using map
  // to loop over the items
  return <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    {/* between these curly braces is javscript */
    SIMPSON_CHARACTERS.map((character,index)=> {
      // from the map you are returning
      // jsx elements
      // every javascript list item needs a unique
      // key, here it's going to be the index.
      return <li key={index} className="mb-2">
        {character}
      </li>
    })
    // this is the end tag of our javascript.
    }
  </ol>

}