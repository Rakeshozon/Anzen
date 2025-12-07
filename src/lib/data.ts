import type { City, State } from './types';

export const states: State[] = [
  { name: 'Andaman and Nicobar Islands', cities: ['Port Blair'] },
  { name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Tirupati', 'Vijayawada'] },
  { name: 'Arunachal Pradesh', cities: ['Tawang', 'Itanagar'] },
  { name: 'Assam', cities: ['Guwahati', 'Kaziranga'] },
  { name: 'Bihar', cities: ['Patna', 'Gaya', 'Nalanda'] },
  { name: 'Chandigarh', cities: ['Chandigarh'] },
  { name: 'Chhattisgarh', cities: ['Raipur', 'Bastar'] },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', cities: ['Daman', 'Diu'] },
  { name: 'Delhi', cities: ['Delhi'] },
  { name: 'Goa', cities: ['Panaji', 'Madgaon'] },
  { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Kutch'] },
  { name: 'Haryana', cities: ['Gurugram', 'Faridabad', 'Kurukshetra'] },
  { name: 'Himachal Pradesh', cities: ['Shimla', 'Manali', 'Dharamshala'] },
  { name: 'Jammu and Kashmir', cities: ['Srinagar', 'Jammu', 'Leh'] },
  { name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur'] },
  { name: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Hampi'] },
  { name: 'Kerala', cities: ['Kochi', 'Thiruvananthapuram', 'Munnar', 'Alappuzha'] },
  { name: 'Ladakh', cities: ['Leh', 'Kargil'] },
  { name: 'Lakshadweep', cities: ['Kavaratti'] },
  { name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Khajuraho'] },
  { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Aurangabad'] },
  { name: 'Manipur', cities: ['Imphal'] },
  { name: 'Meghalaya', cities: ['Shillong', 'Cherrapunji'] },
  { name: 'Mizoram', cities: ['Aizawl'] },
  { name: 'Nagaland', cities: ['Kohima', 'Dimapur'] },
  { name: 'Odisha', cities: ['Bhubaneswar', 'Puri', 'Konark'] },
  { 'name': 'Puducherry', 'cities': ['Puducherry'] },
  { name: 'Punjab', cities: ['Amritsar', 'Ludhiana'] },
  { name: 'Rajasthan', cities: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'] },
  { name: 'Sikkim', cities: ['Gangtok', 'Pelling'] },
  { 'name': 'Tamil Nadu', 'cities': ['Chennai', 'Madurai', 'Kanyakumari'] },
  { 'name': 'Telangana', 'cities': ['Hyderabad'] },
  { 'name': 'Tripura', 'cities': ['Agartala'] },
  { name: 'Uttar Pradesh', cities: ['Lucknow', 'Varanasi', 'Agra'] },
  { name: 'Uttarakhand', cities: ['Dehradun', 'Rishikesh', 'Nainital'] },
  { name: 'West Bengal', cities: ['Kolkata', 'Darjeeling'] }
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
        ...cities.map(c => ({id: c.image, url: `https://picsum.photos/seed/${c.image}/800/600`})),
    ];
    return allImages.find(img => img.id === id);
}
