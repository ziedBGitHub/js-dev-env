import {getUsers} from "./api/userApi";

// Populate table of users via api call

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">delete</a></td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
  </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
})
