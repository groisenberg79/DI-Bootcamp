import random

some_name = input("Please type a string of exactly 10 characters: ")
length_of_name = len(some_name)

if length_of_name < 10:
    print("string not long enough")
elif length_of_name > 10:
    print("string too long")
else:
    print("perfect string")

print()

print(some_name[0])
print(some_name[-1])

print()

partial_name = ""
for n in range(0, length_of_name):
    partial_name += some_name[n]
    print(partial_name)

print()

name_shuffled = ''.join(random.sample(some_name, length_of_name))
print(f"Shuffled name: {name_shuffled}\n")
