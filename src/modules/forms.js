import { fieldsStub } from './templates'
import tmpl1_logo from '../assets/stubs/tmpl_1.jpeg'

const initialState = {
  items: [],
}

const generateFormsStub = (id) => (
  {
    id,
    author: `user ${id}`,
    template: {
      name: "Test 1",
      id: 1,
      img: tmpl1_logo,
      fields: fieldsStub
    },
    fields: [
      {
        field: {
          id: 1,
          name: 'Имя поля 1'
        },
        value: 'Значение поля 1'
      }
    ],
    countAll: 20,
    countFilled: 12
  }
)

const initialStateForTesting = {
  items: [1, 2, 3, 4, 5, 6, 7].map((v) => generateFormsStub(v))
}

export default (state = initialStateForTesting, action) => {
  switch(action.type) {
    case "GET_FORMS_SUCCESS":
      return {
        items: action.data
      }
    default: {
      return state;
    }
  }
}
