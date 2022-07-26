export default function (state = {data: []}, action) {
  switch (action.type) {
    case 'SELECT_VERSION_List':
      return (state = action.payload);
    default:
      return state;
  }
}
