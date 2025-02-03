# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# Answer: Yes, it is possible to add more integers to a tuple;
# for example, you can use the concatenetion operator (+). 
# However, it must be noted that in reality you are 
# destroying the old object and creating a new one:

old_tuple1 = (1, 2, 3)
old_tuple2 = (4, 5, 6)

new_tuple = old_tuple1 + old_tuple2
