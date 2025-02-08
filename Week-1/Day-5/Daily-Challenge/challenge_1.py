user_input = input("Enter a sequence of words seperated by comma: ")
new_list = sorted(user_input.split(','))
# list of every element of new_list with comma char before it except first element
comma_list = [new_list[0]] + [',' + x for x in new_list if new_list.index(x) > 0]
final_str = ''.join(comma_list)
print(new_list)
print(comma_list)
print(final_str)



