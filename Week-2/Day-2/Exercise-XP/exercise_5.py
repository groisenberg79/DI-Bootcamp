from exercise_4 import Familiy

class TheIncredibles(Familiy):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, member_name):
        member = self.find_member(member_name)
        if self.is_18(member_name):
            print(f"{member_name}'s power: {member['power']}")
        else:
            raise Exception(f'''Family member must be 18 or older. Age of {member_name}: {member['age']}''')
    
    def incredible_presentation(self):
        print("\n*Here is our powerful family*\n")
        self.family_presentation()

# >>>>>>> TESTING THE CODE

the_incredibles = TheIncredibles([
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'}, 
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ], 'Incredibles')

the_incredibles.incredible_presentation()

the_incredibles.born(name="Baby Jack", age=0, gender="Male", is_child=True,
                    power="unknown power", incredible_name="BulletBaby")

the_incredibles.incredible_presentation()

the_incredibles.use_power('Baby Jack')

