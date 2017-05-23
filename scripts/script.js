
function initMap() {
  const locateBtn = document.querySelector('.locate-me-button');

  let damageCircles;
  let nukeSelect;
  let mapCenter = {lat: 38.8977, lng: -77.0365};
  //Map settings
  let mapSettings = {
    zoom: 12,
    center: mapCenter,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  };

  let map = new google.maps.Map(document.getElementById('map'), mapSettings);
  let marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
    animation: google.maps.Animation.DROP,
    draggable: true
  });

  if (!"geolocation" in navigator) {
    locateBtn.disabled = true;
    //if no geolocation, disable btn and change css
  } else {
    locateBtn.disabled = false;
  }

  //callback to grab the location of the user if they press locate me btn
  function locationCB() {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude,
          lng = position.coords.longitude;
      let geoLocCoords = {lat: lat, lng: lng};
       marker.setPosition(geoLocCoords);
       map.setCenter(geoLocCoords);
    });
  }

  //change the location of the marker to desired city.
  function citySelectCB() {
    const cityIdx = this.value;
    const city = nukeObject.cities[cityIdx];
    mapCenter = city.loc;
    marker.setPosition(mapCenter);
    map.setCenter(mapCenter);
  }

  //set the nuke size.
  function nukeSelectCB() {
    //grab nuke index/formval
    const nukeIdx = parseInt(this.value);
    nukeSelect = nukeObject.nukes[nukeIdx];
  }

  //launch cb.  creates circle and places at foot of marker
  function launchCB() {
    if (!nukeSelect) {
      console.log('no nuke selected');
      return;
    };
    
    if (damageCircles) {
      resetCB();
    };

    damageCircles = [];
    const allNukes = nukeObject.nukeOrder;
    allNukes.forEach( prop => {
      //create a circle for each damage property.
      const idx = allNukes.indexOf(prop);
      const dmgRadius = nukeSelect.damage[prop]; //find chosen nuke, get damage
      const circColor = nukeObject.circleColors[idx];
      circle = new google.maps.Circle({
        strokeColor: circColor,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: circColor,
        fillOpacity: 0.3,
        map: map,
        center: mapCenter,
        radius: dmgRadius
      });
      circle.bindTo('center', marker, 'position') ;//end obj
      damageCircles.push(circle);
    });
    let firstCircle = damageCircles[0];
    map.fitBounds(firstCircle.getBounds());
  }

  //Reset btn to clear circles
  function resetCB() {
    if (!damageCircles) return;
    damageCircles.forEach( circle => {
      circle.setMap(null);
    });
    damageCircles = undefined;
  }

  //fills in select inputs and adds eventListeners to them
  function fillForms(arr, formId, fn) {
    const ele = document.querySelector(formId);
    arr.forEach( (item, idx) => {
      let strInp = item.cityName ? item.cityName : item.date + ' | ' + item.kt + ' kt';
      const itemStr = `<option value="${idx}">${strInp}</option>`;
      ele.insertAdjacentHTML('beforeend', itemStr);
    });
    ele.addEventListener('input', fn);
  }


  //Form filling.  Will fill in items from nukes.js file so should be able to add items to obj and it will easily adapt
  fillForms(nukeObject.cities, '#preset-cities', citySelectCB);
  fillForms(nukeObject.nukes, '#preset-nukes', nukeSelectCB);

  //EVENT LISTENERS
  const launchBtn = document.querySelector('.launch-btn');
  const resetBtn = document.querySelector('.reset-btn');

  locateBtn.addEventListener('click', locationCB);
  launchBtn.addEventListener('click', launchCB);
  resetBtn.addEventListener('click', resetCB);

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

