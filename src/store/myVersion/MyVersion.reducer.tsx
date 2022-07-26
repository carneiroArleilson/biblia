import {selectVersion} from './MyVersion.selectors';

export default function (
  state = {},
  // state = selectVersion.data.find((element, index) => index === 0),
  // state = selectVersion.data.find(
  //   element => element.language.nameLocal === 'Português',
  // ),
  action,
) {
  switch (action.type) {
    case 'SELECT_MY_VERSION_List':
      return (state = action.payload);
    default:
      return state;
  }
}
