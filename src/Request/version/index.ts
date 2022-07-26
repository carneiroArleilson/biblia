import api from '../../Services/api';

const versionList = async () => {
  try {
    const response = await api.get('bibles');
    return response.data;
  } catch {
    return {data: ['erro na api']};
  }
};

export default {versionList};
