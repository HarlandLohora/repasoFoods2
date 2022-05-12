import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd';


// Obtener los datos de cada input
// Mandarlos a nuestro servidor

// Componente controlado debemos usar event.preventDefault()

//Inputs tiene tanto value / como onChange
const AddFoodForm = (props) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    function actualizarName(nombre) {
        setName(nombre)
    }

    function actualizarImage(image) {
        setImage(image)
    }

    function actualizarCalorias(calorias) {
        setCalories(calorias)
    }

    function actualizarServings(servings) {
        setServings(servings)
    }

    function guardarDatos() {
        console.log("Guardar los datos :)")
        console.log({ name, image, calories, servings })
        props.teletransportador({ name, image, calories, servings })
    }


    return (
        <Form layout='vertical'>
            AddFoodForm
            {name}
            <Form.Item label="Nombre">
                <Input
                    placeholder='Name'
                    value={name}
                    onChange={(event) => actualizarName(event.target.value)}
                />
            </Form.Item>
            <Form.Item label="Image">
                <Input
                    placeholder='Image'
                    value={image}
                    onChange={(event) => actualizarImage(event.target.value)}
                />
            </Form.Item>

            <Form.Item label="Calorias">
                <Input
                    placeholder='Calories'
                    value={calories}
                    onChange={(event) => actualizarCalorias(event.target.value)}
                />
            </Form.Item>
            <Form.Item label="Servings">
                <Input
                    placeholder='Servings'
                    value={servings}
                    onChange={(event) => actualizarServings(event.target.value)}
                />
            </Form.Item>
            <Button type='primary' onClick={guardarDatos}>Save</Button>
        </Form>
    )
}

export default AddFoodForm