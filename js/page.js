import productos from "./productos.js";

async function getCharacter() {
  try {
    const Datas = productos;
    const ul = document.querySelector("#character_list");
    Datas.map((Data) => {
      const Lista = document.createElement("li");
      const foto = document.createElement("img");
      const nombre = document.createElement("p");
      const peso = document.createElement("p");
      const marca = document.createElement("p");

      foto.src = Data.foto;
      nombre.textContent = Data.nombre;
      peso.textContent = Data.peso;
      marca.textContent = Data.marca;

      Lista.appendChild(foto);
      Lista.appendChild(nombre);
      Lista.appendChild(peso);
      Lista.appendChild(marca);
      ul.appendChild(Lista);
    });
  } catch (error) {
    console.log("hay un breve error:", error);
  }
}
getCharacter();
