fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const tareasRealizadas = data.filter(tarea => tarea.completed === true);
        const lista = document.getElementById("listadoAPI");


        tareasRealizadas.forEach(tarea => {
            const li = document.createElement("li")
            li.textContent = tarea.title;
            lista.appendChild(li);

        })
      }).catch(error => {
        console.error("error",error)
      });