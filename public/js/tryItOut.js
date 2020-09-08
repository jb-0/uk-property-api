function showInput() {
  const elements = document.getElementsByClassName('try-it-out-container')[0];

  let query = '';

  for (let j = 0; j < elements.childNodes.length; j++) {
    if ((elements.childNodes[j].value)
        && (['SELECT', 'INPUT'].indexOf(elements.childNodes[j].tagName) >= 0)) {
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

  document.getElementById('try-it-out-endpoint').innerHTML = `${document.URL}properties?${query}`;
}
