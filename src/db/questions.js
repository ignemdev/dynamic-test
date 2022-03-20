const options = [
    {
        "id": 1,
        "text": "Siempre",
        "value": 10
    },
    {
        "id": 2,
        "text": "Casi siempre",
        "value": 8
    },
    {
        "id": 3,
        "text": "Algunas veces",
        "value": 5
    },
    {
        "id": 4,
        "text": "Nunca",
        "value": 0
    }
]

const questionsJson = [
    {
        "id": 1,
        "value": "",
        "description": "¿Evita el exceso de azucar?",
        "options": [...options]
    },
    {
        "id": 2,
        "value": "",
        "description": "¿Le gusta aprender cosas nuevas?",
        "options": [...options]
    },
    {
        "id": 3,
        "value": "",
        "description": "¿Poseo la motivacion necesario para realizar mis planes?",
        "options": [...options]
    },
    {
        "id": 4,
        "value": "",
        "description": "Poseo una dieta balanceada segun los estandares nutricionales",
        "options": [...options]
    },
    {
        "id": 5,
        "value": "",
        "description": "Evito el exceso de grasas saturadas",
        "options": [...options]
    },
    {
        "id": 6,
        "value": "",
        "description": "Me aseguro de obtener las cantidades de fibra y vitaminas necesarias",
        "options": [...options]
    },
    {
        "id": 7,
        "value": "",
        "description": "Me aseguro de obtener las cantidades de fibra y vitaminas necesarias",
        "options": [...options]
    },
    {
        "id": 8,
        "value": "",
        "description": "Bebo MENOS de tres copas de cafe o te al dia",
        "options": [...options]
    },
    {
        "id": 9,
        "value": "",
        "description": "Evito el exceso de sal",
        "options": [...options]
    }
    ,
    {
        "id": 10,
        "value": "",
        "description": "Me siento bien con mis actividades diarias y mi rutina",
        "options": [...options]
    }
]

export default questionsJson;