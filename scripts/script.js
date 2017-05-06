

function initMap() {

  //Certain coords.
  let mapCenter = {lat: 38.8339, lng: -104.8214};

  //Map settings
  let mapSettings = {
    zoom: 4,
    center: mapCenter
  };

  let map = new google.maps.Map(document.getElementById('map'), mapSettings);

  function citySelectCB() {
    
  }

  function fillForms(arr, formId, fn) {
    const ele = document.querySelector(formId);
    arr.forEach( (item, idx) => {
      let strInp = item.cityName ? item.cityName : item.date;
      let itemStr = `<option value="${idx}">${strInp}</option>`;
      ele.insertAdjacentHTML('beforeend', itemStr);
    });

    ele.addEventListener('input', fn)
  }

  fillForms(cities, '#preset-cities');
  fillForms(nukes, '#preset-nukes');

  console.log(nukes);
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










