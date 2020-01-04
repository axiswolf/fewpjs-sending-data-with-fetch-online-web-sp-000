// function submitData(name, email) {
//   let formData = {
//   name: name,
//   email: email
// };
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
//   fetch("http://localhost:3000/users", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//     document.getElementById("result").innerText = (object.id)
//   })
//   .catch(function(error) {
//     alert("Unauthorized Access");
//     console.log(error.message);
//     document.getElementById("result").innerText = error.message
//   });
// }

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: 'POST',
    body: {
      name: name,
      email: email
    }
  })
  .then(function(result) => {
      return result.json();
  }).then(function(json){
    return json.message;
  });
}
