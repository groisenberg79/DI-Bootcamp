# items 1 - 4
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")

# item 5
davids_dog = Dog("Rex", 50)

# item 6
print(f"The name of David's dog is {davids_dog.name} and its height is {davids_dog.height} cm.")
davids_dog.bark()
davids_dog.jump()

# item 7
sarahs_dog = Dog("Teacup", 20)

#item 8
print(f"The name Sarah's dog is {sarahs_dog.name} and its height is {sarahs_dog.height} cm.")
sarahs_dog.bark()
sarahs_dog.jump()

# item 9
if davids_dog.height > sarahs_dog.height:
    print(f"The biggest dog is {davids_dog.name}.")
else:
    print(f"The name of the biggest dog is {sarahs_dog.name}")
