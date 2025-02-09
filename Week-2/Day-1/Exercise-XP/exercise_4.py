class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    def add_animal(self, new_animal):
        '''Adds a new animal to zoo'''
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    def get_animals(self):
        '''Prints all animals in the zoo'''
        for animal in self.animals:
            print(animal)
    def sell_animal(self, animal_sold):
        '''Sells an animal from the zoo'''
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} not in {self.name}.")
    def sort_animals(self):
        '''Groups all animals in the zoo according to first letter
        in alphabetical order. Returns a dict with entries  <group>: <animals>'''
        sorted_animals = sorted(self.animals)
        dict_animals = {}
        for animal in sorted_animals:
            if animal[0] not in dict_animals.keys():
                dict_animals[animal[0]] = [animal]
            else:
                dict_animals[animal[0]].append(animal)
        return dict_animals
    def get_groups(self):
        '''prints all the groups'''
        dict_animals = self.sort_animals()
        for group in dict_animals.keys():
            print(f"Group {group}: ", end='')
            for animal in dict_animals[group]:
                if dict_animals[group].index(animal) < len(dict_animals[group]) - 1:
                    print(f"{animal}, ", end='')
                else:
                    print(f"{animal} ", end='')
            print()



animals = ['Baboons', 'Emu', 'Cat', 'Ape', 'Bear', 'Cougar', 'Eel']
ramat_gan_safari = Zoo('Ramat Gan Safari')

for animal in animals:
    ramat_gan_safari.add_animal(animal)

ramat_gan_safari.get_animals()
print()
ramat_gan_safari.get_groups()
ramat_gan_safari.sell_animal('Giraffe')
ramat_gan_safari.sell_animal('Ape')
ramat_gan_safari.get_groups()
