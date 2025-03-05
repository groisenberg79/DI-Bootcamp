// part 1
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

function getCarHonda(carInventory){
    const honda = carInventory.find(car => car.car_make == 'Honda');
    return honda;
}
const first_honda = getCarHonda(inventory);
console.log(first_honda);

// part 2
function sortCarInventoryByYear(carInventory){
    carInventory.sort((car_a, car_b) => car_a.car_year - car_b.car_year);
}
sortCarInventoryByYear(inventory);
console.log(inventory);