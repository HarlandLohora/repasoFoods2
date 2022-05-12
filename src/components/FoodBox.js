//Se va a encargar de recibir los datos y mostrarlos bonito
import { Button, Col, Card } from 'antd';

//En las props recibo datos de otros lados
function FoodBox(props) {
    console.log(props)
    const { name, image, servings, calories } = props.comida
    const { eliminarComida } = props
    return (
        <Col>
            <Card
                title={name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={image} height={60} alt="food" />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                    <b>Total Calories: {calories * servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => eliminarComida(name)}> Delete </Button>
            </Card>
        </Col>
    )
}

export default FoodBox