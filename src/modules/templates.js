import tmpl1_logo from '../assets/stubs/tmpl_1.jpeg'

const initialState = {
  items: []
}

export const fieldsStub = [
  {
    id: 1,
    title: "Поле 1",
  },
  {
    id: 2,
    title: "Поле 2",
  },
  {
    id: 3,
    title: "Поле 3",
  },
  {
    id: 4,
    title: "Поле 4",
  },
  {
    id: 5,
    title: "Поле 5",
  },
]

const initialStateForTesting = {
  items: [
    {name: "Шаблон анкеты 1", id: 1, img: tmpl1_logo, fields: fieldsStub},
    {name: "Шаблон анкеты 2", id: 2, img: tmpl1_logo, fields: fieldsStub},
    {name: "Шаблон анкеты 3", id: 3, img: tmpl1_logo, fields: fieldsStub},
    {name: "Шаблон анкеты 4", id: 4, img: tmpl1_logo, fields: fieldsStub},
    {name: "Шаблон анкеты 5", id: 5, img: tmpl1_logo, fields: fieldsStub},
    {name: "Шаблон анкеты 6", id: 6, img: tmpl1_logo, fields: fieldsStub},
  ]
}

export default (state = initialStateForTesting, action) => {
  switch(action.type) {
    case "GET_TEMPLATES_SUCCESS":
      return {
        items: action.data
      }
    default: {
      return state;
    }
  }
}
