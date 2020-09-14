function showInput() {
  // const elements = document.getElementsByClassName('try-it-out-container')[0];
  const elements = document.querySelectorAll('.form-input');

  let query = '';

  for (let j = 0; j < elements.length; j++) {
    // Only interested in items that have values
    if (elements[j].value) {
      // The checkbox state is returned through .checked rather than .value
      if (elements[j].type === 'checkbox') {
        if (elements[j].checked) {
          if (query) { query = `${query}&`; }
          query += `${elements[j].id}=${elements[j].checked}`;
        }
      } else {
        if (query) { query = `${query}&`; }
        query += `${elements[j].id}=${elements[j].value}`;
      }
    }
  }

  const url = `${document.URL}properties?${query}`;

  // Return the API call so the user can utilise as necessary
  document.getElementById('try-it-out-url').innerHTML = url;

  document.getElementById('try-it-out-results').innerHTML = 'Fetching data......';

  // Move the user's view to the relevant container
  setTimeout(() => { document.getElementById('try-it-out-url').scrollIntoView(); }, 500);

  getProperties(url).then((data) => {
    document.getElementById('try-it-out-results').innerHTML = data;

    // Move the user's view again to display the full results
    setTimeout(() => { document.getElementById('try-it-out-results').scrollIntoView(); }, 500);
  });

  document.getElementsByClassName('try-it-out-results-container')[0].style.display = 'block';
}

async function getProperties(url) {
  const response = await fetch(url);
  const data = await response.json();

  let formattedResponse = `{<br>"numberOfPropertiesFound":<br>${data.numberOfPropertiesFound}<br>`;
  formattedResponse += '"properties":[<br>';

  for (let i = 0; i < 5; i++) {
    formattedResponse += `${JSON.stringify(data.properties[i], undefined, 2)},<br>`;
  }

  formattedResponse += ']<br>';
  formattedResponse += '}';

  return formattedResponse;
}
