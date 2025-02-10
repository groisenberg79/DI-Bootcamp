class Familiy:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **child):
        self.members.append(child)
        print("Congratulation for the new child!\n")
    
    # helper function
    def find_member(self, member_name):
        for person in self.members:
            if person.get('name') == member_name:
                return person.copy()

    def is_18(self, member_name):
        member = self.find_member(member_name)
        if member['age'] >= 18:
            return True
        else:
            return False
    
    def family_presentation(self):
        print(f"The {self.last_name} Family:\n")
        for person in self.members:
            for key in person.keys():
                print(f"{key:<15} : {person[key]}")
            print()

# >>>>>>> TESTING THE CODE
# OBS: Notice that this test code will run in the next exercise,
# since the class Family will be imported. So you should comment 
# the code below if you wish to avoid that (it would be cleaner if
# we had the module on a separate file, but that's not what was 
# asked in the exercise).

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
