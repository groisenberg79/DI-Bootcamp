class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# item 1
creepy_cat = Cat("Creepy", 11)
ugly_cat = Cat("Ugly", 13)
dumb_cat = Cat("Dumb", 7)

# item 2
def oldest(cat_list):
    oldest = cat_list[0]
    for cat in cat_list:
        if cat.age <= oldest.age:
            pass
        else:
            oldest = cat
    return oldest

# item 3
cat_list = [creepy_cat, ugly_cat, dumb_cat]
old = oldest(cat_list)
print(f"The oldest cat is {old.name}, and is {old.age} years old.")