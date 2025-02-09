class Farm:
    def  __init__(self, name):
        self.farm_name = name
        self.farm_animals = {}

    def add_animal(self, animal, number_animals=1):
        if animal not in self.farm_animals.keys():
            self.farm_animals[animal] = number_animals
        else:
            self.farm_animals[animal] += number_animals

    def get_info(self):
        info = f"{self.farm_name}'s farm\n\n\n"
        for animal in self.farm_animals.keys():
            info += f"{animal:<10}: {self.farm_animals[animal]:>5}\n"
        info += f"\n{'E-I-E-I-0!':>20}"
        return info
    
    def get_animal_types(self):
        animal_list = []
        for animal in self.farm_animals.keys():
            animal_list.append(animal)
        return sorted(animal_list)
    
    def get_short_info(self):
        animal_list = self.get_animal_types()
        short_info = f"{self.farm_name}'s farm has "
        for animal in animal_list:
            if animal_list.index(animal) == 0:
                short_info += f"{animal}s"
            elif animal_list.index(animal) == len(animal_list) - 1:
                short_info += f" and {animal}s."
            else:
                short_info += f", {animal}s"
        return short_info


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('donkey', 2340)
macdonald.add_animal('chicken', 3)
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())