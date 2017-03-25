import { apiWrapper } from './apiWrapper';

const uploadFile = async (form) =>
  apiWrapper('/upload_and_parse', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'https://pdf-parser.v1.gexapi.com',
    },
    // credentials: 'include',
    body: form,
  })
    .then(async (response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 403) {
        const errData = await response.json();
        if (errData.error) {
          return errData;
        }
      }
      return false;
    })
    .catch(console.error);

export default uploadFile;
