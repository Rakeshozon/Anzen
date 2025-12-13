import type { City, State } from './types';

export const states: State[] = [
  { name: 'Andaman and Nicobar Islands', cities: ['Port Blair', 'Havelock Island', 'Neil Island'] },
  {
    name: 'Andhra Pradesh',
    cities: [
      'Visakhapatnam', 'Tirupati', 'Araku Valley', 'Gandikota', 'Vijayawada', 'Kurnool', 'Srisailam', 'Lepakshi', 'Rajahmundry', 'Amaravati'
    ]
  },
  {
    name: 'Arunachal Pradesh',
    cities: [
      'Tawang', 'Itanagar', 'Ziro Valley', 'Bomdila', 'Pasighat', 'Mechuka'
    ]
  },
  {
    name: 'Assam',
    cities: [
      'Guwahati', 'Kaziranga', 'Majuli', 'Tezpur', 'Manas National Park', 'Haflong'
    ]
  },
  {
    name: 'Bihar',
    cities: [
      'Bodh Gaya', 'Patna', 'Nalanda', 'Rajgir', 'Vaishali', 'Valmiki Nagar', 'Bhagalpur'
    ]
  },
  { name: 'Chandigarh', cities: ['Chandigarh'] },
  {
    name: 'Chhattisgarh',
    cities: [
      'Raipur', 'Jagdalpur', 'Chitrakote', 'Mainpat', 'Bilaspur'
    ]
  },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', cities: ['Daman', 'Diu', 'Silvassa'] },
  {
    name: 'Delhi',
    cities: [
      'New Delhi', 'Old Delhi', 'South Delhi'
    ]
  },
  { name: 'Goa', cities: ['North Goa', 'South Goa', 'Panaji', 'Dudhsagar', 'Calangute', 'Anjuna'] },
  {
    name: 'Gujarat',
    cities: [
      'Ahmedabad', 'Kutch', 'Gir', 'Somnath', 'Dwarka', 'Vadodara', 'Statue of Unity', 'Saputara', 'Bhuj'
    ]
  },
  {
    name: 'Haryana',
    cities: [
      'Gurugram', 'Kurukshetra', 'Morni Hills', 'Sultanpur', 'Panipat'
    ]
  },
  {
    name: 'Himachal Pradesh',
    cities: [
      'Shimla', 'Manali', 'Dharamshala', 'Dalhousie', 'Kasol', 'Spiti Valley', 'Kasauli', 'Bir Billing', 'Kullu', 'Jibhi'
    ]
  },
  {
    name: 'Jammu and Kashmir',
    cities: [
      'Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Vaishno Devi', 'Patnitop', 'Jammu'
    ]
  },
  {
    name: 'Jharkhand',
    cities: [
      'Ranchi', 'Deoghar', 'Jamshedpur', 'Netarhat', 'Hazaribagh'
    ]
  },
  {
    name: 'Karnataka',
    cities: [
      'Bengaluru', 'Bhimanakatte','Mysuru', 'Coorg', 'Hampi', 'Gokarna', 'Udupi', 'Chikmagalur', 'Murudeshwar','Belgaum', 'Badami', 'Dandeli', 'Mangaluru','Raichur'
    ]
  },
  {
    name: 'Kerala',
    cities: [
      'Kochi', 'Thiruvananthapuram', 'Munnar', 'Alappuzha', 'Wayanad', 'Varkala', 'Thekkady', 'Kovalam', 'Kumarakom', 'Vagamon', 'Bekal'
    ]
  },
  { name: 'Ladakh', cities: ['Leh', 'Nubra Valley', 'Pangong Lake', 'Kargil', 'Hanle'] },
  { name: 'Lakshadweep', cities: ['Agatti', 'Bangaram', 'Kavaratti', 'Minicoy'] },
  {
    name: 'Madhya Pradesh',
    cities: [
      'Khajuraho', 'Gwalior', 'Ujjain', 'Pachmarhi', 'Kanha', 'Bandhavgarh', 'Bhopal', 'Indore', 'Sanchi', 'Orcha'
    ]
  },
  {
    name: 'Maharashtra',
    cities: [
      'Mumbai', 'Pune', 'Lonavala', 'Mahabaleshwar', 'Shirdi', 'Aurangabad', 'Nashik', 'Alibaug', 'Tarkarli', 'Khandala', 'Nagpur'
    ]
  },
  {
    name: 'Manipur',
    cities: [
      'Imphal', 'Loktak Lake', 'Moreh'
    ]
  },
  {
    name: 'Meghalaya',
    cities: [
      'Shillong', 'Cherrapunji', 'Dawki', 'Mawlynnong', 'Tura'
    ]
  },
  {
    name: 'Mizoram',
    cities: [
      'Aizawl', 'Reiek', 'Vantawng Falls'
    ]
  },
  {
    name: 'Nagaland',
    cities: [
      'Kohima', 'Dimapur', 'Dzukou Valley', 'Mon'
    ]
  },
  {
    name: 'Odisha',
    cities: [
      'Puri', 'Bhubaneswar', 'Konark', 'Chilika Lake', 'Gopalpur', 'Rourkela'
    ]
  },
  { name: 'Puducherry', cities: ['Puducherry', 'Auroville', 'Karaikal'] },
  {
    name: 'Punjab',
    cities: [
      'Amritsar', 'Chandigarh', 'Ludhiana', 'Patiala', 'Jalandhar'
    ]
  },
  {
    name: 'Rajasthan',
    cities: [
      'Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Mount Abu', 'Bikaner', 'Chittorgarh', 'Ranthambore', 'Ajmer'
    ]
  },
  { name: 'Sikkim', cities: ['Gangtok', 'Pelling', 'Nathula Pass', 'Lachung', 'Yumthang Valley', 'Ravangla'] },
  {
    name: 'Tamil Nadu',
    cities: [
      'Chennai', 'Coimbatore', 'Madurai', 'Ooty', 'Kodaikanal', 'Kancheepuram','Mahabalipuram', 'Rameshwaram', 'Kanyakumari', 'Thanjavur', 'Yercaud', 'Velankanni', 'Kumbakonam', 'Tiruchirappalli'
    ]
  },
  {
    name: 'Telangana',
    cities: [
      'Hyderabad', 'Warangal', 'Nagarjuna Sagar', 'Bhadrachalam', 'Ramappa'
    ]
  },
  {
    name: 'Tripura',
    cities: [
      'Agartala', 'Unakoti', 'Udaipur'
    ]
  },
  {
    name: 'Uttar Pradesh',
    cities: [
      'Agra', 'Varanasi', 'Ayodhya', 'Lucknow', 'Mathura', 'Vrindavan', 'Prayagraj', 'Jhansi', 'Fatehpur Sikri', 'Sarnath'
    ]
  },
  {
    name: 'Uttarakhand',
    cities: [
      'Rishikesh', 'Mussoorie', 'Nainital', 'Auli', 'Jim Corbett', 'Haridwar', 'Dehradun', 'Kedarnath', 'Badrinath', 'Almora', 'Ranikhet', 'Lansdowne'
    ]
  },
  {
    name: 'West Bengal',
    cities: [
      'Kolkata', 'Darjeeling', 'Kalimpong', 'Digha', 'Sundarbans', 'Siliguri', 'Mandarmani', 'Shantiniketan'
    ]
  }
];

export const cities: City[] = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    description: 'Known as the "Silicon Valley of India," Bengaluru is a vibrant city with a blend of modern tech culture and rich history.',
    image: 'bengaluru-city',
    attractions: [],
  },
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    description: 'The capital city of India, Delhi is a massive metropolitan area with a rich history visible in its many ancient landmarks.',
    image: 'delhi-city',
    attractions: [],
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'The "Pink City," Jaipur is the capital of Rajasthan, known for its stunning royal palaces and vibrant markets.',
    image: 'jaipur-city',
    attractions: [],
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    description: 'Home to the iconic Taj Mahal, Agra is a city on the banks of the Yamuna river, rich in Mughal history.',
    image: 'agra-city',
    attractions: [],
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    description: 'Famous for its beautiful beaches, vibrant nightlife, Portuguese architecture, and laid-back atmosphere.',
    image: 'goa-city',
    attractions: [],
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    description: 'A major cultural, economic, and educational center in South India.',
    image: 'chennai-city',
    attractions: [],
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    description: 'Known as the "City of Joy," it\'s the cultural capital of India.',
    image: 'kolkata-city',
    attractions: [],
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    description: 'A hub of technology and history, famous for its biryani and Charminar.',
    image: 'hyderabad-city',
    attractions: [],
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'The bustling financial capital of India, famous for Bollywood, colonial architecture, and vibrant street life.',
    image: 'mumbai-city',
    attractions: [],
  },
];

export const getCities = () => cities;
export const getCityByName = (name: string) => cities.find(c => c.name.toLowerCase() === name.toLowerCase());
export const getFeaturedCities = () => cities;
export const getStates = () => states;

export const findImage = (id: string) => {
  // In a real app, this would be a more robust lookup.
  // For now, we are just mocking a simple find.
  const allImages = [
    ...cities.map(c => ({ id: c.image, url: `https://picsum.photos/seed/${c.image}/800/600` })),
  ];
  return allImages.find(img => img.id === id);
}
