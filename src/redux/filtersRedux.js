/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addTags = payload => ({ payload, type: ADD_TAGS});
export const removeTags = payload => ({ payload, type: REMOVE_TAGS});
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags.slice(0, statePart.tags.indexOf(action.payload)), 
          ...statePart.tags.slice(statePart.tags.indexOf(action.payload)+1)],   
      };  
    default:
      return statePart;
  }
}
