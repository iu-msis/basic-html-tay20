https://randomuser.me/api/?inc=name, nat, dob, email, picture


created() {

  fetch("https://randomuser.me/api/?inc=name, nat, dob, email, picture")
  .then( response => response.json() )
  .then( json => {
    /// variable in data chunk you want to replace with reponse (this.user?? for randomuser. then put templated portions in html file
    this.ptlist = json;
    console.log(json)
  });
}

/// replacement for hardcoded data in user page??
///      <div class="patientCard" v-for="pt in ptList">
    ///        <span class="lastName">{{ pt.lastName }}</span>,
    ///        <span clas="firstName">{{ pt.firstName }}</span>
      ///      <span class="birthDate float-right">{{ pt.dob }}</span>
      ///    </div>
