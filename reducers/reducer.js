import { actionTypes } from '../actions/actions'

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  activeCarousel : null,
  home : {},
  homeclients : [],
  homesliders : {},
  manifesto:{},
  footer : {},
  studio : {},
  wwd : {},
  works : {},
  workslist:{},
  workslistsingle : {},
  wwdprocess : {},
  workcategories : {}
}

function reducer (state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      }
    case actionTypes.SET_CAROUSEL:
      return {
        ...state,
        ...action
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count }
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light }
      }
    case actionTypes.GET_HOME_SUCCESS:
      return {
        ...state,
        ...{ home: action.data }
      }
      case actionTypes.GET_HOME_SLIDERS_SUCCESS:
      return {
        ...state,
        ...{ homesliders: action.data }
      }
    case actionTypes.GET_HOME_CLIENT_SUCCESS:
      return {
        ...state,
        ...{ homeclients: action.data }
      }
    case actionTypes.GET_MANIFESTO_SUCCESS:
      return {
        ...state,
        ...{ manifesto: action.data }
      }
  case actionTypes.GET_FOOTER_SUCCESS:
      return {
        ...state,
        ...{ footer: action.data }
      }
    case actionTypes.GET_STUDIO_SUCCESS:
      return {
        ...state,
        ...{ studio: action.data }
      }
  case actionTypes.GET_WORKS_SUCCESS:
      return {
        ...state,
        ...{ works: action.data }
      }
  case actionTypes.GET_WWD_SUCCESS:
      return {
        ...state,
        ...{ wwd: action.data }
      }
    case actionTypes.GET_WORKS_LIST_SUCCESS:
      return {
        ...state,
        ...{ workslist: action.data }
      }
    case actionTypes.GET_WORKS_LIST_SINGLE_SUCCESS:
      return {
        ...state,
        ...{ workslistsingle: action.data }
      }
      case actionTypes.GET_WWD_PROCESS_SUCCESS:
        return {
          ...state,
          ...{ wwdprocess: action.data }
        }
        case actionTypes.GET_WORK_CATEGORIES_SUCCESS:
          return {
            ...state,
            ...{ workcategories: action.data }
          }
    default:
      return state
  }
}

export default reducer
