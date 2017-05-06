

function initMap() {
  //Certain coords.
  let mapCenter = {lat: 38.8977, lng: -77.0365};
  //Map settings
  let mapSettings = {
    zoom: 12,
    center: mapCenter
  };

  let map = new google.maps.Map(document.getElementById('map'), mapSettings);
  let marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
    animation: google.maps.Animation.DROP,
    draggable: true
  });

  //circle
  let circleRadius;
  let nukeCircle;

  function fillForms(arr, formId, fn) {
    const ele = document.querySelector(formId);
    arr.forEach( (item, idx) => {
      let strInp = item.cityName ? item.cityName : item.date;
      let itemStr = `<option value="${idx}">${strInp}</option>`;
      ele.insertAdjacentHTML('beforeend', itemStr);
    });

    ele.addEventListener('input', fn)
  }

  //change the location of the marker to desired city.
  function citySelectCB() {
    const cityIdx = this.value;
    const city = cities[cityIdx];
    //const coords = city.loc;
    mapCenter = city.loc;
    marker.setPosition(mapCenter);
    map.setCenter(mapCenter);
  }

  //set the nuke size.
  function nukeSelectCB() {
    //grab nuke index/formval
    const nukeIdx = this.value;
    const nuke = nukes[nukeIdx];
    const kt = nuke.kt;
    circleRadius = kt * 100;
  }

  //launch cb.  creates circle and places at foot of marker
  function launchCB() {
    nukeCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: mapCenter,
      radius: 300
    });
  }

  //need event for when marker is dragged to let circile follow

  fillForms(cities, '#preset-cities', citySelectCB);
  fillForms(nukes, '#preset-nukes', nukeSelectCB);

  const launchBtn = document.querySelector('.launch-btn');

  launchBtn.addEventListener('click', launchCB);


}// initMap











