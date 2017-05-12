
let nukeObject = {
  cities: [
    {
      cityName: 'Colorado Springs, CO',
      loc: {lat: 38.8339, lng: -104.8214},
    },
    {
      cityName: 'Washington, D.C.',
      loc: {lat: 38.904722, lng: -77.016389}
    },
    {
      cityName: 'Los Angeles, CA',
      loc: {lat: 34.05, lng: -118.25}
    },
    {
      cityName: 'Austin, TX',
      loc: {lat: 30.266667, lng: -97.733333}
    },
    {
      cityName: 'Little Rock, AR',
      loc: {lat: 34.736111, lng: -92.331111}
    },
    {
      cityName: 'Honolulu, HI',
      loc: {lat: 21.3, lng: -157.816667}
    },
    {
      cityName: 'Seoul, South Korea',
      loc: {lat: 37.566667, lng: 126.966667}
    }
  ],

  nukes: [
    {
      nukeId: 1,
      date: 'Oct 9, 2006',
      kt: 0.7,
      damage: {
        fireball: 70,
        airblast20: 190,
        airblast5: 410,
        thermrad: 450,
        radrad: 1940
      }
    },
    {
      nukeId: 2,
      date: 'May 25, 2009',
      kt: 5.4,
      damage: {
        fireball: 160,
        airblast20: 380,
        airblast5: 800,
        thermrad: 1070,
        radrad: 1120
      }
    },
    {
      nukeId: 3,
      date: 'Feb 12, 2013',
      kt: 14,
      damage: {
        fireball: 230,
        airblast20: 520,
        airblast5: 1100,
        thermrad: 1320,
        radrad: 1630
      }
    },
    {
      nukeId: 4,
      date: 'Jan 6, 2016',
      kt: 10,
      damage: {
        fireball: 200,
        airblast20: 470,
        airblast5: 990,
        thermrad: 1250,
        radrad: 1410
      }
    },
    {
      nukeId: 5,
      date: 'Sept 9, 2016',
      kt: 25,
      damage: {
        fireball: 290,
        airblast20: 640,
        airblast5: 1340,
        thermrad: 1460,
        radrad: 1940
      }
    }
  ],

  nukeOrder: ['radrad', 'thermrad', 'airblast5', 'airblast20', 'fireball'],
  circleColors: ['#e74c3c', '#d35400', '#e67e22', '#f39c12', '#f1c40f']

}

//DC, LA, Austin,
//Colorado Springs***, Little Rock Arkansas, Honolulu,
//Seoul


