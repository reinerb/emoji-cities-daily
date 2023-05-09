import type { City } from "../types/City";

// Different types of weather
const weatherTypes = [
  'clear',
  'raining',
  'cloudy',
  'snowing',
  'stormy',
  'night',
];

// Emoji elements for city building
// These are pointers to emojis
const buildings = [
  0x1f3df, 0x1f3db, 0x1f3d7, 0x1f3d8, 0x1f3e0, 0x1f3e1, 0x1f3e2, 0x1f3e3,
  0x1f3e4, 0x1f3e5, 0x1f3e6, 0x1f3e8, 0x1f3e8, 0x1f3ea, 0x1f3eb, 0x1f3ec,
  0x1f3ed, 0x26ea, 0x1f54c, 0x1f3d9,
];
const skyElements = {
  clear: [0x2601],
  night: [0x1fa90, 0x2b50, 0x1f31f, 0x1f320, 0x1f30c, 0x2604],
  raining: [0x2601, 0x1f327, 0x1f4a7],
  cloudy: [0x2601],
  snowing: [0x1f328, 0x2744, 0x2601],
  stormy: [0x1f327, 0x1f329, 0x26c8, 0x26a1, 0x1f4a7],
};
const sunMoonElements = {
  clear: [0x2600, 0x1f31e, 0x1f324],
  night: [
    0x1f311, 0x1f312, 0x1f313, 0x1f314, 0x1f315, 0x1f316, 0x1f317, 0x1f318,
    0x1f319, 0x1f31a, 0x1f31b, 0x1f31c, 0x1f31d,
  ],
  raining: [0x1f326, 0x2601, 0x26c5, 0x1f325, 0x1f327],
  cloudy: [0x1f324, 0x1f325, 0x26c5, 0x2601],
  snowing: [0x2601, 0x26c5, 0x1f328, 0x1f325],
  stormy: [0x2601, 0x1f326, 0x26c8, 0x1f329],
};

// Gets a random element from the given list 
function getRandomListElement<Type> (list: Type[]) : Type {
    return list[Math.floor((Math.random() * list.length))]
}

// Generates a new City object with the given width
// skyProbability is the chance that any cell in the sky has 
export default function generateCity(width: number, skyProbability: number) : City {
    const weather = getRandomListElement<string>(weatherTypes);
    
    return {
        weather: weather,
        sun: '',
        sky: [],
        buildings: [],
    }
}