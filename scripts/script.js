

function initMap() {
  let volcanoes = [
    {
      name: 'Mt. Galunggung',
      location: {lat: 7.256667, lng: 108.076944},
      date: '1882',
      deathToll: '4011',
      vei: '5'
    },
    {
      name: 'Mt. Kelut',
      location: {lat: 7.93, lng: 112.308},
      date: '1919',
      deathToll: '5110',
      vei: '4'//GOTTA FIND
    },
    {
      name: 'The Laki Volcanic System',
      location: {lat: 64.064722, lng: -18.226111},
      date: '1783-1784',
      deathToll: '9350',
      vei: '4'//Gotta find
    },
    {
      name: 'Mt. Vesuvius',
      location: {lat: 40.816667, lng: 14.433333},
      date: '79 AD',
      deathToll: '10000+',
      vei: '5'//Gotta find
    },
    {
      name: 'Mt. Unzen',
      location: {lat: 32.756667, lng: 130.294444},
      date: '1792',
      deathToll: '12000-15000',
      vei: '3'//Gotta find
    },
    {
      name: 'Nevado Del Ruiz',
      location: {lat: 4.895278, lng: -75.3225},
      date: '1985',
      deathToll: '23000',
      vei: '3'//Gotta find
    },
    {
      name: 'Mt. Krakatoa',
      location: {lat: -6.102, lng: 105.423},
      date: '1883',
      deathToll: '36000',
      vei: '6'//Gotta find
    },
    {
      name: 'Mt. Pelee',
      location: {lat: 14.816667, lng: -61.166667},
      date: '1883',
      deathToll: '40000',
      vei: '4'//Gotta find
    },
    {
      name: 'Mt. Tombora',
      location: {lat: -8.246667, lng: 117.958333},
      date: '1816',
      deathToll: '92000',
      vei: '7'
    }    
  ];

  let mapCenter = {lat: 38.8339, lng: -104.8214};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: mapCenter
  });


  function fillForms(arr, formId) {
    const ele = document.querySelector(formId);
    arr.forEach( (item, idx) => {
      let itemStr = `<option value="${idx}">${item.name}</option>`;
      ele.insertAdjacentHTML('beforeend', itemStr);
    });

    ele.addEventListener('input', function(){
      let volc = volcanoes[this.value];
      let marker = new google.maps.Marker({
        center: mapCenter,
        map: map
      });

      map.setCenter(volc.location);
    });
  };
  

  fillForms(volcanoes, '#preset-volcs');
}



















  // let url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/';
  //     url += '2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  // let xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200) {
  //       cities = JSON.parse(xhr.response);
  //       //console.log(cities)
  //       //fillForms(cities, '#preset-cities');
  //     } else {
  //       //file not found
  //       console.log(xhr);
  //     }
  //   }
  // };
  // xhr.open('GET', url);
  // xhr.send();










