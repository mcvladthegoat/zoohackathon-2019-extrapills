import { combineReducers } from 'redux'
import auth from './auth'
import counter from './counter'
import templates from './templates'
import forms from './forms'

export default combineReducers({
  auth,
  counter,
  templ ates,
  forms
})
