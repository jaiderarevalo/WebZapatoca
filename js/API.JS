
///////////////////////////////////////////////////////////////////////////////////////
async function getCharacter() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=2");
  const Datas = await response.json()
const ul = document.querySelector("#character_list")
  console.log(Datas);
  Datas.results.map(Data => {
    const Lista = document.createElement("li")
    const imagenes = document.createElement("img")
    const nombre = document.createElement("p")
    const especies = document.createElement("p")


    imagenes.src = Data.image
    nombre.textContent =Data.name
    especies.textContent = Data.species

    Lista.appendChild(imagenes)
    Lista.appendChild(nombre)
    Lista.appendChild(especies)
    ul.appendChild(Lista)
  })

  } catch (error) {
    console.log("hay un breve error");
  }
} getCharacter();

////////////////////////////////////////////////////////////////////
