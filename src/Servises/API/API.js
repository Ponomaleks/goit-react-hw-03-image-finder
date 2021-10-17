const axios = require('axios');

axios.defaults.baseURL = 'https://pixabay.com/api/';

const key = '23058122-31f355087b2f6a9d816f84625';
export default function API(query, page, setImages) {
  return axios(
    `/?q=${query.trim(
      '',
    )}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(function (response) {
      setImages(response.data.hits);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  // .then(function () {
  //   // always executed
  // });
}
