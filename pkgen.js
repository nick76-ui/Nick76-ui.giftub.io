let pkmn = []


async function fetchpkmn() {

    try{
        const response = await fetch("pkmn.json")
        if (!response.ok) {
            throw new Error(`Error: ${response.error}`)
        }

        const data = await response.json()
        pkmn = data.pokemons
        console.log(data.pokemons[0])

        document.getElementById("pk-name")

        return pkmn
    } catch(error){
        console.log(`Error: ${error}`)
    }

}
fetchpkmn()
pkmn = fetchpkmn()
console.log(pkmn)