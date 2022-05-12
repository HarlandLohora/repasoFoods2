import logo from './logo.svg';
import { useState } from "react"
import './App.css';
import alimentos from "./foods.json"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Input, Button } from 'antd';



//Recorrer -> [ {}.{}.{} ]  Dentro de JSX vamos a usar "map"
function App() {
  const [foods, setFoods] = useState(alimentos)
  const [foodsCP, setFoodsCP] = useState(alimentos) //backup

  const [mostrarForm, setMostrarForm] = useState(false)

  function teletransportador(nuevaComida) {
    console.log("Datos teletransportados", nuevaComida)
    //El estado no se puede actualizar directamente, se debe usar el spread operator
    const copia = [...foods, nuevaComida]
    setFoods(copia)
    setFoodsCP(copia)
  }

  function eliminarComida(nombreDeComida) {
    console.log("Nombre de la comida", nombreDeComida)
    console.log(foods)
    const cpFood = [...foods]

    //Arreglo de objetos HOF
    const datosLimpios = foods.filter((comida) => {
      return comida.name !== nombreDeComida
    })
    console.log(datosLimpios)
    //Modificamos el estado es con set
    setFoods(datosLimpios)
    setFoodsCP(datosLimpios)
  }

  //PARA FILTRAR DATOS PODEMOS USAR
  //Al filtrar estamos modificando foods
  function filtrarDatos(event) {
    const texto = event.target.value
    if (texto === "") {
      console.log("show el segundo cp")
      //Modifica el setfoods
      setFoods(foodsCP)
    } else {
      console.log("filtra")
      const datos = foodsCP.filter(comida => comida.name.includes(texto))
      //Modifica el setfoods
      setFoods(datos)
    }

    //const nuevoArreglo = []
    //Primera vez estan todos
    //foods.forEach(comida => {
    //if (comida.name.includes(texto)) {
    //nuevoArreglo.push(comida)
    //}
    //})
    //console.log(datos)
    //console.log(nuevoArreglo)

  }

  function mostrarFormFn() {
    //Cuando se llame esta funcion quiero actualizar el estado mostrarForm
    console.log("Muestra el form")
    //toggle
    setMostrarForm(!mostrarForm)
  }

  return (
    <div className="App">

      {/*Aqui el addfoodform */}
      {mostrarForm && <AddFoodForm teletransportador={teletransportador} />}

      <Button onClick={mostrarFormFn}>{mostrarForm ? "Hide form" : "Add new food"}</Button>

      <Input onChange={filtrarDatos} />
      <div className='foods'>
        {foods.map((comida) => {
          return <FoodBox comida={comida} eliminarComida={eliminarComida} />
        })}
      </div>



      {foods.length === 0 && <h2>Ops! No more content </h2>}
    </div>
  );
}

export default App;
