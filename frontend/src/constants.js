// Helper to dynamically generate mock room images based on folders and counts
const generateMockImages = (roomNum, maxCount) => {
  const folder = roomNum === 2 ? 'room2' : `room ${roomNum}`;
  const images = [{ image_url: `/rooms/${folder}/room${roomNum}.webp`, is_primary: true }];
  for (let i = 1; i <= maxCount; i++) {
    images.push({ image_url: `/rooms/${folder}/room${roomNum}_${i}.webp`, is_primary: false });
  }
  return images;
};

export const MOCK_ROOMS = [
  {
    id: 1,
    name: 'Room 1, Deluxe Double Room',
    slug: 'room-1-deluxe-double-room',
    description: 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV. The unit offers 1 bed.',
    images: generateMockImages(1, 9),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Tea/Coffee Facilities', icon: 'Coffee' },
      { name: 'Hairdryer', icon: 'Wind' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 2,
    name: 'Room 2, Four Poster Room',
    slug: 'room-2-four-poster-room',
    description: 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers a four poster bed.',
    images: generateMockImages(2, 12),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Tea/Coffee Facilities', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Complimentary Toiletries', icon: 'Sparkles' }
    ]
  },
  {
    id: 3,
    name: 'Room 3, Standard Double',
    slug: 'room-3-standard-double',
    description: 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
    images: generateMockImages(3, 18),
    amenities: [
      { name: 'Free Wi-Fi Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'Private Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 4,
    name: 'Room 4, Deluxe Balcony Room',
    slug: 'room-4-deluxe-balcony-room',
    description: 'This double room provides a fireplace. A seating area with a flat-screen TV, a desk, a balcony and a private bathroom are provided in this double room. The unit offers 1 bed.',
    images: generateMockImages(4, 9),
    amenities: [
      { name: 'Private Balcony', icon: 'Sparkles' },
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'Private Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' }
    ]
  },
  {
    id: 5,
    name: 'Room 5, Standard Double',
    slug: 'room-5-standard-double',
    description: 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
    images: generateMockImages(5, 15),
    amenities: [
      { name: 'Free Wi-Fi Internet Access', icon: 'Wifi' },
      { name: 'Private Bathroom with Shower', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk with Lamp', icon: 'Laptop' }
    ]
  },
  {
    id: 6,
    name: 'Room 6, Deluxe Double',
    slug: 'room-6-deluxe-double',
    description: 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
    images: generateMockImages(6, 20),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Private Bathroom with Shower', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Complimentary Toiletries', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 7,
    name: 'Room 7, Small Single',
    slug: 'room-7-small-single',
    description: 'A TV, DVD player and tea/coffee making facilities are featured in this room.',
    images: generateMockImages(7, 5),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating Throughout', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'TV & DVD Player in Room', icon: 'Tv' },
      { name: 'Tea & Coffee Facilities', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk & Chair', icon: 'Laptop' }
    ]
  },
  {
    id: 8,
    name: 'Room 8, Deluxe Double',
    slug: 'room-8-deluxe-double',
    description: 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
    images: generateMockImages(8, 11),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Designer Toiletries', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 9,
    name: 'Room 9, Split Level Double',
    slug: 'room-9-split-level-double',
    description: 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
    images: generateMockImages(9, 14),
    amenities: [
      { name: 'Cosy Fireplace Feature', icon: 'Flame' },
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Fridge & Kettle', icon: 'Coffee' },
      { name: 'Linen & Towels Supplied', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  }
];
