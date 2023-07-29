document.addEventListener('DOMContentLoaded', function() {
    loadData()  
  });

  function loadData() {
    fetch('/leaders.json')
      .then(res => res.json())
      .then(data => populateYears(data));
  }

  function populateYears(data) {
    var select = document.getElementById("years");
    if (select == null) {
        createCards(data)
        return
    }
    if (select.children.length == 0) {
      var years = [];
      for (var person of data) {
        var palsYear = person.palsYear;

        if (!(years.includes(palsYear))) {
          years.push(palsYear);
        }
      }

      var index = 0;
      for (var i = 0; i < years.length; i++) {
        var opt = document.createElement("option");
        opt.value= years[i];
        opt.innerHTML = years[i];

        select.appendChild(opt);
        index++;
      }

      select = document.getElementById("years")
      for(var i = 0; i < select.length; i++) {
        select[i].selectedIndex =0;
      }
    }

    createCards(data)
  }

  function createCards(data) {
    SSLRow = document.getElementById("SSL")
    SSLRow.innerHTML = ''
    leaderRow = document.getElementById("Leader")
    if (leaderRow != null){
        leaderRow.innerHTML = ''
        select = document.getElementById("years")
        for (var person of data.filter(a => a.palsYear == select.value)) {
            createCard(person)
        }
    } else {
        for (var person of data.filter(a => a.palsYear == "2023-24")) {
            createCard(person)
        }
    }
    
  }

  function createCard(data) {
    let card = document.createElement('div')
    card.className = "col-md-3 d-flex";

    let cardBody = document.createElement('div')
    cardBody.className = "bg-white p-3 text-center rounded box team-card flex-fill";

    let name = document.createElement('h5')
    name.className = "mt-3 name";
    name.innerText = data.Name;

    let photo = document.createElement('img')
    photo.className = "img-responsive rounded-circle";
    photo.src = "/img/leaders/" + data.palsYear + "/" + data.Name.split(" ")[0] + ".png";
    photo.setAttribute("onerror", "this.src='/img/user_default.jpg'")
    photo.width = "90";

    let about = document.createElement('div')
    about.className = "mt-4 about"; 
    about.innerText =  data.Degree + " - Year " + data.Year
    
    let contacts = document.createElement('div')
    contacts.className = "cardContacts"
    if (data.LinkedIn) {
      let linkedinLink = document.createElement('a')
      linkedinLink.href = data.LinkedIn
      let linkedinLogo = document.createElement('i')
      linkedinLogo.className = "bi bi-linkedin"
      linkedinLink.append(linkedinLogo)
      contacts.append(linkedinLink)
    }
    if (data.email) {
      let emailLink = document.createElement('a')
      emailLink.href = "mailto:" + data.email
      let emailIcon = document.createElement('i')
      emailIcon.className = "bi bi-envelope"
      emailLink.append(emailIcon)
      contacts.append(emailLink)
    }
    row = document.getElementById(data.Role)

    cardBody.append(photo)
    cardBody.append(name)
    cardBody.append(about)
    cardBody.append(contacts)
    card.append(cardBody)
    row.append(card)

  }