# items 1 - 2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking")
    
    def speed(self):
        return self.weight/self.age*10
    
    def fight(self, other_dog):
        if self.speed() > other_dog.speed():
            print(f"{self.name} won the fight against {other_dog.name}.")
        elif self.speed() < other_dog.speed():
            print(f"{other_dog.name} won the fight against {self.name}.")
        else:
            print(f"Both {dog.name} and {other_dog.name} are all bloodied up.\n"
                "Let's call it a draw before the police shows up.")
        print()
            
# item 3

elvis = Dog("Elvis", 10, 12)
ludwig = Dog("Ludwig", 4, 13)
mr_perfect = Dog("Mr. Perfect", 7, 20)
dog_list = [elvis, ludwig, mr_perfect] 

for dog in dog_list:
    print("-------------------------------")
    print(f"{'Dog name':<10} {':':^2} {dog.name:<10}")
    print(f"{'Age':<10} {':':^2} {dog.age} years")
    print(f"{'Weight':<10} {':':^2} {dog.weight} kg")
    print("-------------------------------")
    dog.bark()
    print()
    list_copy = dog_list.copy()
    list_copy.remove(dog)
    for  other_dog in list_copy:
        dog.fight(other_dog)

