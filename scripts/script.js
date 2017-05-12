
function initMap() {
  //set circle variables
  //let nukeCircle;
  var myColors = ['#e74c3c', '#d35400', '#e67e22', '#f39c12', '#f1c40f'];
  // let fireball;
  // let airblast20;
  // let airblast5;
  // let thermrad;
  // let radrad;

  let nukeSelect;


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
      const itemStr = `<option value="${idx}">${strInp}</option>`;
      ele.insertAdjacentHTML('beforeend', itemStr);
    });
    ele.addEventListener('input', fn);
  }

  //change the location of the marker to desired city.
  function citySelectCB() {
    const cityIdx = this.value;
    const city = nukeObject.cities[cityIdx];
    //const coords = city.loc;
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
    if (!damageCircle) {
      var idx = 0;
      for (var blastType in nukeSelect.damage) {
        var damageCircle = new google.maps.Circle({
          strokeColor: myColors[idx],
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: myColors[idx],
          fillOpacity: 0.35,
          map: map,
          center: mapCenter,
          radius: nukeSelect.damage[blastType]
        });
        damageCircle.bindTo('center', marker, 'position');
        console.log(nukeSelect.damage[blastType]);
        console.log(myColors[idx]);
        idx++;
      }
    } 
  }

  fillForms(nukeObject.cities, '#preset-cities', citySelectCB);
  fillForms(nukeObject.nukes, '#preset-nukes', nukeSelectCB);

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

