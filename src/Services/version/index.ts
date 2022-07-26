import VersionRequest from '../../Request/version';
import {store} from '../../store/store';
import {selectVersionList} from '../../store/version/Version.action';

const versionList = async () => {
  const versionResponse = await VersionRequest.versionList();
  if (versionResponse.data !== []) {
    store.dispatch(selectVersionList(versionResponse));
    return versionResponse;
  } else {
    return 'error';
  }
};

export default {versionList};
