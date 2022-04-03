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
        "description": "¿Evita el exceso de azúcar?",
        "options": [...options]
    },
    {
        "id": 2,
        "value": "",
        "description": "¿Posee una dieta balanceada según los estándares nutricionales?",
        "options": [...options]
    },
    {
        "id": 3,
        "value": "",
        "description": "¿Evita el exceso de grasas saturadas?",
        "options": [...options]
    },
    {
        "id": 4,
        "value": "",
        "description": "¿Bebe menos de 3 copas/ vasos de alcohol por semana?",
        "options": [...options]
    },
    {
        "id": 5,
        "value": "",
        "description": "¿Se asegura de obtener las cantidades de fibra y vitaminas necesarias?",
        "options": [...options]
    },
    {
        "id": 6,
        "value": "",
        "description": "¿Bebe mas de 8 vasos de agua al día?",
        "options": [...options]
    },
    {
        "id": 7,
        "value": "",
        "description": "¿Bebe menos de tres tazas de café al día?",
        "options": [...options]
    },
    {
        "id": 8,
        "value": "",
        "description": "¿Evita el exceso de sal?",
        "options": [...options]
    },
    {
        "id": 9,
        "value": "",
        "description": "¿Realiza alguna actividad física diariamente?",
        "options": [...options]
    }
    ,
    {
        "id": 10,
        "value": "",
        "description": "¿Mantiene un nivel de grasa corporal controlado?",
        "options": [...options]
    }
]

export default questionsJson;