export function selectVersionList(version) {
  return {
    type: 'SELECT_VERSION_List',
    payload: version,
  };
}
