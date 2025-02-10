from exercise_2 import Dog
import random

class  PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *args):
        dog_list = []
        for arg in args:
                dog_list.append(arg)
        dog_names = ', '.join(dog_list)
        print(f"{dog_names} all play together.")
    
    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll",
                      "stands on his back legs",
                      "shakes your hand",
                      "plays dead"]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} is not trained.")

# >>>>>>> TESTING THE CODE

elvis = Dog("Elvis", 10, 12)
ludwig = Dog("Ludwig", 4, 13)
mr_perfect = Dog("Mr. Perfect", 7, 20)
nosey = PetDog("Nosey", 10, 12)

nosey.do_a_trick()
print()
nosey.train()
print()
nosey.do_a_trick()
print()

nosey.play(elvis.name, ludwig.name, mr_perfect.name)