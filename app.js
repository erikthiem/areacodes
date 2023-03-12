data = [
  {
    "code": "205",
    "city": "Birmingham",
    "state": "Alabama",
    "lyric": "205 till I die, so I'm ridin' for Alabama",
    "lat": 33.5,
    "lng": -86.8
  },
  {
    "code": "313",
    "city": "Detroit",
    "state": "Michigan",
    "lyric": "313, where ya at? Detroit! ",
    "lat": 42.3,
    "lng": -83.0
  },
  {
    "code": "404",
    "city": "Atlanta",
    "state": "Georgia",
    "lyric": "404, my city, my city",
    "lat": 33.7,
    "lng": -84.4
  },
  {
    "code": "410",
    "city": "Baltimore",
    "state": "Maryland",
    "lyric": "I represent the 4-1-0, the home of the brave and the land of the hope",
    "lat": 39.3,
    "lng": -76.6
  },
  {
    "code": "412",
    "city": "Pittsburgh",
    "state": "Pennsylvania",
    "lyric": "412, what's happenin', what's up, hello",
    "lat": 40.4,
    "lng": -79.9
  },
  {
    "code": "504",
    "city": "New Orleans",
    "state": "Louisiana",
    "lyric": "504, boy, don't act like you don't know me",
    "lat": 29.9,
    "lng": -90.1
  },
  {
    "code": "608",
    "city": "Madison",
    "state": "Wisconsin",
    "lyric": "608, what's the code? I'm fillin' your ears with the Midwest flow",
    "lat": 43.1,
    "lng": -89.4
  },
  {
    "code": "702",
    "city": "Las Vegas",
    "state": "Nevada",
    "lyric": "702, what you wanna do?",
    "lat": 36.2,
    "lng": -115.1
  },
  {
    "code": "718",
    "city": "Brooklyn",
    "state": "New York",
    "lyric": "Now throw your hands up in the sky, and wave 'em 'round from side to side\n718, what up?",
    "lat": 40.7,
    "lng": -73.9
  },
  {
    "code": "813",
    "city": "Tampa",
    "state": "Florida",
    "lyric": "813, it's just another day in the County",
    "lat": 27.9,
    "lng": -82.5
  },
  {
    "code": "214",
    "city": "Dallas",
    "state": "Texas",
    "lyric": "214, it's just a G thang",
    "lat": 32.8,
    "lng": -96.8
  },
  {
    "code": "256",
    "city": "Huntsville",
    "state": "Alabama",
    "lyric": "256, the Rocket City, where the space shuttle be",
    "lat": 34.7304,
    "lng": -86.5861
  },
  {
    "code": "267",
    "city": "Philadelphia",
    "state": "Pennsylvania",
    "lyric": "267, my city, where it's gritty and pretty, my city",
    "lat": 39.9526,
    "lng": -75.1652
  },
  {
    "code": "281",
    "city": "Houston",
    "state": "Texas",
    "lyric": "281, where I roam, I'ma Texas boy, baby, born and raised on chrome",
    "lat": 29.7604,
    "lng": -95.3698
  },
  {
    "code": "301",
    "city": "Silver Spring",
    "state": "Maryland",
    "lyric": "My 301, got my man Steve-O, he's the first in command",
    "lat": 38.9977,
    "lng": -77.0262
  },
  {
    "code": "305",
    "city": "Miami",
    "state": "Florida",
    "lyric": "305 to my city, you can never catch me",
    "lat": 25.7617,
    "lng": -80.1918
  },
  {
    "code": "310",
    "city": "Los Angeles",
    "state": "California",
    "lyric": "310, Westside, that's how we ride",
    "lat": 34.0522,
    "lng": -118.2437
  },
  {
    "code": "312",
    "city": "Chicago",
    "state": "Illinois",
    "lyric": "312, where you at? The Windy City, and all of that",
    "lat": 41.8781,
    "lng": -87.6298
  },
  {
    "code": "314",
    "city": "St. Louis",
    "state": "Missouri",
    "lyric": "314, we're worldwide, we're nationwide",
    "lat": 38.627,
    "lng": -90.1994
  },
  {
    "code": "318",
    "city": "Shreveport",
    "state": "Louisiana",
    "lyric": "318 representin', Shreveport, Louisiana",
    "lat": 32.5252,
    "lng": -93.7502
  },
  {
    "code": "323",
    "city": "Los Angeles",
    "state": "California",
    "lyric": "323, what's the deal? Westside, let's ride!",
    "lat": 34.0522,
    "lng": -118.2437
  },
  {
    "code": "330",
    "city": "Akron",
    "state": "Ohio",
    "lyric": "I'm from the 330, where they ball and ride low",
    "lat": 41.0814,
    "lng": -81.519
  }
]

		// Create a Leaflet map instance
		const map = L.map('map').setView([37.09, -95.71], 4);

		// Create a base layer
    const baseLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org/">OpenStreetMap</a>, under <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY SA</a>.'
    });

		// Add the base layer to the map
		map.addLayer(baseLayer);

    // use a custom ludacris icon
    var ludacrisIcon = L.icon({
        iconUrl: 'ludacris.png',
        iconSize: [64, 64], // set the size of the icon
        iconAnchor: [16, 32], // set the position of the anchor point relative to the icon
    });

		// Loop through the locations in the data
		data.forEach(location => {
			// Create a marker for the location
			const marker = L.marker([location.lat, location.lng], { icon: ludacrisIcon }).addTo(map);

			// Attach a popup to the marker with the location's lyric
			marker.bindPopup(`<strong>${location.code}</strong> - ${location.city}, ${location.state}<br>${location.lyric}`).on('mouseover', function() {
				this.openPopup();
			}).on('mouseout', function() {
				this.closePopup();
			});
		});

		// Add a layer control to the map
		L.control.layers({
			'OpenStreetMap': baseLayer,
			'OpenStreetMap Black and White': L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
			})
		}).addTo(map);

