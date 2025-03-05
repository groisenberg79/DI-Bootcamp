const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
// This is a destructuring statement: it takes the 'name' property
// from the object and creates a variable with the same name as the
// property key and assigns it to the same value as the respective 
// object property. It then searches inside the 'location' property
// for the properties 'country' and 'city', creating variables just as 
// in the case of the 'name' property, and searches further inside 
// the 'coordinates' property, assigning new varibles to the values
// of 'lat' and 'lon'.
const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// prints the variables newly created.
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);