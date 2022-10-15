    function submit() {
      var name = document.getElementById('name').value;
      var age = document.getElementById('age').value;
      var gender = document.getElementById('gender').value;
      var locality = document.getElementById('locality').value;
      var email = document.getElementById('email').value;
      var number = document.getElementById('number').value;


      document.getElementById('name').value = null;
      document.getElementById('age').value = null;
      document.getElementById('gender').value = "empty";
      document.getElementById('locality').value = null;
      document.getElementById('email').value = null;
      document.getElementById('number').value = null;

      document.getElementById('nameP').innerHTML = name;
      document.getElementById('ageP').innerHTML = age;
      document.getElementById('genderP').innerHTML = gender;
      document.getElementById('localityP').innerHTML = locality;
      document.getElementById('emailP').innerHTML = email;
      document.getElementById('numberP').innerHTML = number;
      if (name == "") {
        document.getElementById('nameP').innerHTML = "--";

      }
      if (age == "") {
        document.getElementById('ageP').innerHTML = "--";

      }
      if (gender == "empty") {
        document.getElementById('genderP').innerHTML = "--";

      }
      if (locality == "") {
        document.getElementById('localityP').innerHTML = "--";

      }
      if (email == "") {
        document.getElementById('emailP').innerHTML = "--";

      }
      if (number == "") {
        document.getElementById('numberP').innerHTML = "--";

      }


    }

