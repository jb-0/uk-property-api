function showInput() {
  const elements = document.getElementsByClassName('try-it-out-container')[0];

  let query = '';

  for (let j = 0; j < elements.childNodes.length; j++) {
    // Only interested in INPUT items (numerical, checkboxes and slider) and location SELECT item
    if ((elements.childNodes[j].value)
        && (['SELECT', 'INPUT'].indexOf(elements.childNodes[j].tagName) >= 0)) {

      // The checkbox state is returned through .checked rather than .value
      if (elements.childNodes[j].type === 'checkbox') {
        if (elements.childNodes[j].checked) {
          if (query) { query = `${query}&`; }
          query += `${elements.childNodes[j].id}=${elements.childNodes[j].checked}`;
        }
      } else {
        if (query) { query = `${query}&`; }
        query += `${elements.childNodes[j].id}=${elements.childNodes[j].value}`;
      }
    }
  }

  const url = `${document.URL}properties?${query}`

  // Return the API call so the user can utilise as necessary
  document.getElementById('try-it-out-url').innerHTML = url;

  document.getElementById('try-it-out-results').innerHTML = 'Fetching data......'

  getProperties(url).then((data) => document.getElementById('try-it-out-results').innerHTML = data)

  document.getElementsByClassName('try-it-out-results-container')[0].style.display = 'block';
}

async function getProperties(url) {
  const response = await fetch(url);
  const data = await response.json();

  let formattedResponse = '{<br>"properties":[<br>'

  for (let i = 0; i < 6; i++) {
    formattedResponse += `${JSON.stringify(data.properties[i], undefined, 2)},<br>`;
  }

  formattedResponse += ']<br>';
  formattedResponse += '}';

  return formattedResponse;
}
