const {PlaceModel} = require('../model/place.js');

const initilizeData = async() => {
  for(let place of arr) {
    const newPlace = new PlaceModel(place);
    await newPlace.save()
  }

}

const searchData = async(page = 0, city, count = 4, type) => {

  let query = {}
  if (type) query.type = type;
  query.city = city;
  return await PlaceModel.find(query)
  .limit(count)
  .skip(count * page)
}

const createData = async(city, title, type, description, img, lat = 34.05316383366003, lng = -118.24010773699382) => {
  let obj = {
    city,
    title,
    type,
    description,
    img,
    lat,
    lng
  };
  return await PlaceModel.create(obj)

}

const incrementinglike = async (id) => {
  const place = await PlaceModel.findById(id)
  place.like = place.like ? place.like + 1 : 1;
  await place.save()
}


const arr = [
  {
    city: 'san jose',
    title: 'El Jardin',
    type: 'restaurant',
    description: 'this is the new heart of the San Jose whoever was in the Bay Area should go to this place such a beautiful restaurant  plays music with a lot of energy where you like to hang out for hours and hours the place is so crowded later in the afternoon it’s better to go a little bit early to get into the reservation or you have to wait for a long time that is true because the restaurant is so packed the drinks were so amazing so tasty and then so colorful and follow up with the food fresh and clean and crisp.',
    img: 'https://eljardintequilabar.com/wp-content/uploads/2021/01/Copy-of-Quesabirrias.jpg',
    lat: 37.321301596755816,
    lng: -121.94759231227683,

  },

  {
    city: 'san jose',
    title: 'Municipal Rose Garden',
    type: 'park',
    description: 'Nice big place to have a family outing, photo shoot, small ceremonies etc. Though I visited during off season, I was able to see a lot of roses in various colors. The park is divided into two segments. Only one has the fountain and the roses. Get there early if you want a good spot between the roses. Gets super busy during weekends and holidays. Saw many people having some quality time with loved ones. Will definitely plan an outing here during peak spring.',
    img: 'https://montereyfarmgirl.com/wp-content/uploads/2019/06/fullsizeoutput_2b0c-1024x821.jpeg',
    lat: 37.33385450153321,
    lng: -121.92891409043445,

  },
  {
    city: 'los angeles',
    title: 'Venice Beach',
    type: 'beach',
    description: 'Lively, popular and crowded beach close to Los Angeles.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/0b/3d/ab/venice-beach.jpg?w=600&h=-1&s=1',
    lat: 35.1,
    lng: 40.2
  },
  {
    city: 'san jose',
    title: 'El Camino Mongolian BBQ',
    type: 'restaurant',
    description: 'All the ingredients here are fresh and taste great. For a modest price you can get as much as your heart desires. I myself have gone back for seconds and even thirds many times here, and I am never disappointed.',
    img: 'https://duyt4h9nfnj50.cloudfront.net/resized/b635fbd977cedb90ba38f43398ac5d4e-w2880-2c.jpg',
    lat: 37.35326621471666,
    lng: -121.98915187463497
  },
  {
    city: 'los angeles',
    title: 'Santa Monica Pier',
    type: 'restaurant',
    description: 'This bustling wooden wharf is the place to be, with its eateries, shops, high-tech arcade, roller coaster, giant Ferris wheel and other rides, famous 1922 indoor merry-go-round and fantastic views of the bay and the mountains.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/87/e4/dc/pacific-park-roller-coaster.jpg?w=1400&h=-1&s=1',
    lat: 35.3,
    lng: 40.4
  },
  {
    city: 'los angeles',
    title: 'Santa Monica Pier',
    type: 'restaurant',
    description: 'This bustling wooden wharf is the place to be, with its eateries, shops, high-tech arcade, roller coaster, giant Ferris wheel and other rides, famous 1922 indoor merry-go-round and fantastic views of the bay and the mountains.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/87/e4/dc/pacific-park-roller-coaster.jpg?w=1400&h=-1&s=1',
    lat: 35.6,
    lng: 40.7
  },
  {
    city: 'los angeles',
    title: 'Abbot Kinney Boulevard',
    type: 'restaurant',
    description: 'Today, Abbot Kinney Boulevard is still one of the hippest streets in all of Los Angeles. A slew of bustling restaurants helmed by top chefs has made the block one of the city’s top dining destinations, and with its charming boutiques, Instagrammable street art, events, and people-watching, Abbot Kinney Boulevard is a can’t-miss stop for any visitor to LA.',
    img: 'https://images.squarespace-cdn.com/content/v1/573bf7cccf80a1c792a4b768/1542075421244-Z9VOK16DT1G9ICE1ZPOA/063AbbotKinneyBlvd-AKA-557.jpg?format=1000w',
    lat: 33.98923099551948,
    lng: -118.46250431755936
  },
  {
    city: 'los angeles',
    title: 'Pasha',
    type: 'restaurant',
    description: 'Today, Abbot Kinney Boulevard is still one of the hippest streets in all of Los Angeles. A slew of bustling restaurants helmed by top chefs has made the block one of the city’s top dining destinations, and with its charming boutiques, Instagrammable street art, events, and people-watching, Abbot Kinney Boulevard is a can’t-miss stop for any visitor to LA.',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/17/a0/5c/6b/cover.jpg',
    lat: 33.98923099551950,
    lng: -118.46250431755800
  },
  {
    city: 'los angeles',
    title: 'Griffith Observatory',
    type: 'restaurant',
    description: 'Definitely a great place to see LA sunset and night skies. The observatory itself was eye-opening. Be sure to check out the Zeiss 12-inch telescope on the roof to see Venus, Saturn, and maybe Jupiter.',
    img: 'https://assets.discoverlosangeles.com/sites/default/files/styles/listography_image/public/media/activities/points_of_interest/griffith-observatory-hollywood-sign-sunset.jpg',
    lat: 34.27304882967735,
    lng: -118.26847637736256
  },
  {
    city: 'san jose',
    title: 'San José Museum of Art',
    type: 'museum',
    description: 'This is a small museum space with some nice unique installations with a distinct bay area ethos. Some areas were closed when I visited yesterday , but that is ok since there is still lots to look at. We also ate at the cafe which was good with friendly staff and gives you energy to take in the works. Museum store also was nice to browse through.',
    img: 'https://sjmusart.org/sites/default/files/styles/overlay/public/photobynorikoslussen_sjmuseum_lunarnewyear.jpg?itok=AVjZSEGM',
    lat: 37.339716282499246,
    lng: -121.89117336655576
  },

  {
    city: 'las vegas',
    title: 'Pechanga Casino',
    type: 'casino',
    description: 'Players can strike it rich on more than 2,000 slots, test their skill at Blackjack, Pai Gow or Poker, and try their luck in the casino\'s grand Bingo hall.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/55/80/just-after-sunset-on.jpg?w=2000&h=-1&s=1',
    lat: 35.8,
    lng: 40.9
  }
]

///////////


module.exports = {initilizeData, searchData, createData, incrementinglike}