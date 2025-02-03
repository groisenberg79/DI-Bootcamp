# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

print()
my_fav_numbers = {1,2,4,6,7,8,9,34}
print(f"my favorite numbers: {my_fav_numbers}\n")

my_fav_numbers.update({-11, 12})
print(f"after adding -11 and 12: {my_fav_numbers}\n")

my_fav_numbers.remove(list(my_fav_numbers)[-1])
print(f"after removing the last one: {my_fav_numbers}\n")

friend_fav_numbers = {23, 12, 67, 2, 89,4, 7}
print(f"my friend’s favorite numbers: {friend_fav_numbers}\n")

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(f"our favorite numbers: {our_fav_numbers}\n")



