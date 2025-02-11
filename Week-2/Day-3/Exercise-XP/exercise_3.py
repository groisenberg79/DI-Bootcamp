import random
import string

alphabet = string.ascii_letters
rand_string = ""
for i in range(5):
    rand_string += random.choice(alphabet)
print(rand_string)

