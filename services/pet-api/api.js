const express = require('express');
const app = express();
const PORT = 3000;

// Sample breeds data
const breeds = [
    {id: 1, name: 'dog'},
    {id: 2, name: 'cat'},
    {id: 3, name: 'rabbit'},
];

// Sample pets data, each pet has a breedId that corresponds to a breed in the breeds array
const pets = [
    {id: 1, name: 'Bella', breedId: 1, age: 3, weight: 12.5, description: 'A friendly dog.'},
    {id: 2, name: 'Milo', breedId: 2, age: 2, weight: 8.0, description: 'A curious cat.'},
    {id: 3, name: 'Charlie', breedId: 1, age: 4, weight: 15.0, description: 'A playful dog.'},
    {id: 4, name: 'Max', breedId: 3, age: 1, weight: 3.5, description: 'A cute rabbit.'},
    {id: 5, name: 'Luna', breedId: 2, age: 2, weight: 7.5, description: 'A mischievous cat.'},
    {id: 6, name: 'Rocky', breedId: 1, age: 5, weight: 18.0, description: 'A loyal dog.'},
    {id: 7, name: 'Lucy', breedId: 2, age: 3, weight: 6.0, description: 'A cuddly cat.'},
    {id: 8, name: 'Daisy', breedId: 1, age: 2, weight: 10.0, description: 'A friendly dog.'},
    {id: 9, name: 'Oliver', breedId: 3, age: 1, weight: 4.0, description: 'A curious rabbit.'},
    {id: 10, name: 'Maggie', breedId: 2, age: 4, weight: 9.0, description: 'A playful cat.'},
    {id: 11, name: 'Buddy', breedId: 1, age: 3, weight: 11.5, description: 'A loyal dog.'},
    {id: 12, name: 'Coco', breedId: 2, age: 2, weight: 7.2, description: 'A cute cat.'},
    {id: 13, name: 'Toby', breedId: 1, age: 5, weight: 16.0, description: 'A brave dog.'},
    {id: 14, name: 'Sammy', breedId: 2, age: 3, weight: 6.5, description: 'A friendly cat.'},
    {id: 15, name: 'Ginger', breedId: 1, age: 2, weight: 9.0, description: 'A playful dog.'},
    {id: 16, name: 'Zeus', breedId: 3, age: 1, weight: 3.0, description: 'A cute rabbit.'},
    {id: 17, name: 'Chloe', breedId: 1, age: 4, weight: 13.0, description: 'A loyal dog.'},
    {id: 18, name: 'Bear', breedId: 2, age: 5, weight: 10.0, description: 'A calm cat.'},
    {id: 19, name: 'Lola', breedId: 1, age: 3, weight: 12.0, description: 'A protective dog.'},
    {id: 20, name: 'Bailey', breedId: 3, age: 1, weight: 4.5, description: 'A playful rabbit.'},
    {id: 21, name: 'Rex', breedId: 1, age: 2, weight: 8.0, description: 'A small dog.'},
    {id: 22, name: 'Sadie', breedId: 2, age: 4, weight: 7.0, description: 'A friendly cat.'},
    {id: 23, name: 'Misty', breedId: 1, age: 1, weight: 6.5, description: 'A puppy dog.'},
    {id: 24, name: 'Maya', breedId: 3, age: 2, weight: 5.0, description: 'A fluffy rabbit.'},
    {id: 25, name: 'Oscar', breedId: 2, age: 3, weight: 8.5, description: 'A lazy cat.'},
    {id: 26, name: 'Ruby', breedId: 1, age: 4, weight: 14.0, description: 'A strong dog.'},
    {id: 27, name: 'Jake', breedId: 2, age: 5, weight: 9.0, description: 'A friendly cat.'},
    {id: 28, name: 'Scout', breedId: 1, age: 3, weight: 10.5, description: 'An active dog.'},
    {id: 29, name: 'Leo', breedId: 3, age: 2, weight: 6.0, description: 'A playful rabbit.'},
    {id: 30, name: 'Harley', breedId: 1, age: 2, weight: 9.5, description: 'A strong dog.'},
    {id: 31, name: 'Nala', breedId: 2, age: 1, weight: 5.5, description: 'A cute cat.'},
    {id: 32, name: 'Milo', breedId: 1, age: 3, weight: 11.0, description: 'A curious dog.'},
    {id: 33, name: 'Zoe', breedId: 2, age: 4, weight: 7.2, description: 'A loving cat.'},
    {id: 34, name: 'Sophie', breedId: 1, age: 2, weight: 9.3, description: 'A playful dog.'},
    {id: 35, name: 'Nina', breedId: 2, age: 5, weight: 8.0, description: 'A quiet cat.'},
    {id: 36, name: 'Murphy', breedId: 1, age: 3, weight: 12.0, description: 'A brave dog.'},
    {id: 37, name: 'Benny', breedId: 2, age: 2, weight: 6.2, description: 'A gentle cat.'},
    {id: 38, name: 'Simba', breedId: 1, age: 5, weight: 17.0, description: 'A strong dog.'},
    {id: 39, name: 'Rosie', breedId: 3, age: 1, weight: 3.5, description: 'A playful rabbit.'},
    {id: 40, name: 'Penny', breedId: 1, age: 2, weight: 9.5, description: 'A sweet dog.'},
    {id: 41, name: 'Pip', breedId: 2, age: 1, weight: 5.5, description: 'A small cat.'},
    {id: 42, name: 'Rocky', breedId: 3, age: 4, weight: 5.0, description: 'A fluffy rabbit.'},
    {id: 43, name: 'Freya', breedId: 1, age: 3, weight: 12.5, description: 'A loyal dog.'},
    {id: 44, name: 'Toby', breedId: 2, age: 2, weight: 6.8, description: 'A fun cat.'},
    {id: 45, name: 'Benny', breedId: 1, age: 4, weight: 15.0, description: 'A tough dog.'},
    {id: 46, name: 'Cleo', breedId: 3, age: 1, weight: 4.0, description: 'A cute rabbit.'},
    {id: 47, name: 'Tucker', breedId: 2, age: 3, weight: 7.5, description: 'A loving cat.'},
    {id: 48, name: 'Marley', breedId: 1, age: 5, weight: 16.0, description: 'A brave dog.'},
    {id: 49, name: 'Lily', breedId: 3, age: 1, weight: 3.8, description: 'A playful rabbit.'},
    {id: 50, name: 'Gizmo', breedId: 2, age: 2, weight: 7.0, description: 'A friendly cat.'},
];

// Utility function to get breed name from breedId
const getBreedName = (breedId) => {
    const breed = breeds.find(b => b.id === breedId);
    return breed ? breed.name : null;
};

// Route to get all pets with breed names
app.get('/pets', (req, res) => {
    const petsWithBreed = pets.map(pet => ({
        id: pet.id,
        name: pet.name,
        breed: getBreedName(pet.breedId),
        age: pet.age,
        weight: pet.weight,
        description: pet.description,
    }));
    res.json({pets: petsWithBreed});
});

app.get('/pets/ids/:ids', (req, res) => {
    const petsWithBreed = pets.map(pet => ({
        id: pet.id,
        name: pet.name,
        breed: getBreedName(pet.breedId),
        age: pet.age,
        weight: pet.weight,
        description: pet.description,
    }));
    res.json({pets: petsWithBreed});
});

// Route to get all breeds
app.get('/breeds', (req, res) => {
    res.json({breeds});
});

// Route to get pets by breed type (breedId)
app.get('/pets/breed/:breedId', (req, res) => {
    const breedId = parseInt(req.params.breedId, 10);
    const petsByBreed = pets
        .filter(pet => pet.breedId === breedId)
        .map(pet => ({
            id: pet.id,
            name: pet.name,
            breed: getBreedName(pet.breedId),
            age: pet.age,
            weight: pet.weight,
            description: pet.description,
        }));

    if (petsByBreed.length === 0) {
        return res.status(404).json({message: 'No pets found for this breed'});
    }

    res.json({pets: petsByBreed});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
