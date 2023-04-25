function submitData(name, email) {
    const person = {
        name: name,
        email: email
      }
      const conf = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(person)
      }
    return fetch('http://localhost:3000/users',conf )
    .then(response => response.json())
    .then(data => {
        const newId = data.id;
      const idNode = document.createElement("p");
      idNode.textContent = newId;
      document.body.appendChild(idNode);
    })
    .catch(error => {
        const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message;
      document.body.appendChild(errorMessage);
    });
  }
