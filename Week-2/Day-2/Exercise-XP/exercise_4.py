class Familiy:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **child):
        self.members.append(child)
        print("Congratulation for the new child!\n")

    def is_18(self, member_name):
        for person in self.members:
            if person.get('name') == member_name:
                if person['age'] >= 18:
                    return True
                else:
                    return False
    
    def family_presentation(self):
        print(f"The {self.last_name} Family:\n")
        for person in self.members:
            print(f"Name : {person['name']}")
            print(f"Age: {person['age']}")
            print(f"Gender: {person['gender']}")
            if person['is_child'] == True:
                print("Minor")
            else:
                print("Adult")
            print()

new_family = Familiy([
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
        ], "Roisenberg")

new_family.family_presentation()
new_family.born(name="Billy", age=0, gender="Male", is_child=True)
new_family.family_presentation()

for name in ['Billy', 'Michael', 'Sarah']:
    if new_family.is_18(name):
        print(f"{name} is an adult")
    else:
        print(f"{name} is still a minor")
