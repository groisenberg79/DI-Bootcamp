users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# result 1:
#>>> print(disney_users_A)
#{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

disney_users_A = {}
for i in range(len(users)):
    disney_users_A[users[i]] = i
print(disney_users_A)
print()

# result 2:
#>>> print(disney_users_B)
#{0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

disney_users_B = {}
for i in range(len(users)):
    disney_users_B[i] = users[i]
print(disney_users_B)
print()

# result 3:
# >>> print(disney_users_C)
#{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

users_copy = users.copy()
users_copy.sort()
disney_users_C = {}
for i in range(len(users_copy)):
    disney_users_C[users_copy[i]] = i
print(disney_users_C)
print()

# item 4
# in the solution provided here, i'm assuming the exercise is 
# asking us to 'clean' the original list first and then create 
# the dictionary: otherwise, the indexes that appear in the dict
# would not correspond to the position of the elements in
# the list. If that's not the case, just 'uncomment' the
# alternative solution below.

disney_users_A.clear()
users_copy = users.copy()
for item in users:
    if 'i' not in item:
        users_copy.remove(item)
for index in range(len(users_copy)):
    disney_users_A[users_copy[index]] = index
print(disney_users_A)

disney_users_A.clear()
users_copy = users.copy()
print(users_copy)
for item in users:
    if item[0] != "M" and item[0] != "P":
        users_copy.remove(item)
print(users_copy)
for index in range(len(users_copy)):
    disney_users_A[users_copy[index]] = index
print(disney_users_A)



# disney_users_A.clear()
# for n in range(len(users)):
#     if 'i' in users[n]:
#         disney_users_A[users[n]] = n
# print(disney_users_A)
# print()

# disney_users_A.clear()
# for n in range(len(users)):
#     if users[n][0] == 'M' or users[n][0] == 'P':
#         disney_users_A[users[n]] = n
# print(disney_users_A)