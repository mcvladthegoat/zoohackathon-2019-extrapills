import tmpl1_logo from '../assets/stubs/tmpl_1.jpeg'

const initialState = {
  items: []
}

export const fieldsStub = [
  {
    id: 1,
    title: "Поле 1",
    parent: {
      id: 2,
      title: "Поле 2",
      parent: {
        id: 3,
        title: "Поле 3",
        parent: {}
      }
    },
    count: 20
  }
]

const initialStateForTesting = {
  items: [
    {name: "Test 1", id: 1, img: tmpl1_logo, fields: fieldsStub},
    {name: "Test 2", id: 2, img: tmpl1_logo, fields: fieldsStub},
    {name: "Test 3", id: 3, img: tmpl1_logo, fields: fieldsStub},
    {name: "Test 4", id: 4, img: tmpl1_logo, fields: fieldsStub},
    {name: "Test 5", id: 5, img: tmpl1_logo, fields: fieldsStub},
    {name: "Test 6", id: 6, img: tmpl1_logo, fields: fieldsStub},
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
