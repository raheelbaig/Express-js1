
app.use(cors())

function data() {
    let Name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value
    axios.post('https://usercreatedserver.herokuapp.com/users', {
        name: Name,
        email: email,
        pass:pass
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
    function get(){
    axios.get('https://usercreatedserver.herokuapp.com/users')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }
  );