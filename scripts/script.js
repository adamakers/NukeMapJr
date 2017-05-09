

function initMap() {
  let circleRadius;
  let nukeCircle;
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
    if (nukeCircle) {
      nukeCircle.setCenter(mapCenter);
    } else {
      console.log('nope')
    }
  }

  //set the nuke size.
  function nukeSelectCB() {
    //grab nuke index/formval
    const nukeIdx = this.value;
    const nuke = nukes[nukeIdx];
    const kt = nuke.kt;
    circleRadius = kt * 1000;
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
      radius: 12000
    });
    nukeCircle.bindTo('center', marker, 'position');
  }

  //need event for when marker is dragged to let circile follow

  fillForms(cities, '#preset-cities', citySelectCB);
  fillForms(nukes, '#preset-nukes', nukeSelectCB);


  //EVENT LISTENERS
  const launchBtn = document.querySelector('.launch-btn');
  launchBtn.addEventListener('click', launchCB);

}// initMap











  // how I previously updated the circle location when marker dragged, however, .bindTo() is the better solution
  //bindTo('center', marker, 'position'); where 'center' is the property of the circle we want to update, marker is
  //what we want to bind item to and 'position' is the property of marker that we want to bind to the circles 'center'

  // marker.addListener('drag', () => {
  //   if (nukeCircle) {
  //     const markerLat = marker.getPosition().lat();
  //     const markerLng = marker.getPosition().lng();
  //     nukeCircle.setCenter({lat: markerLat, lng: markerLng});
  //   }
  // });

