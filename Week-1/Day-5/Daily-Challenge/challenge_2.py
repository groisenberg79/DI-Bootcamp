def longest_word(str):
    str_list = str.split()
    max_word = [str_list[0], len(str_list[0])]
    for word in str_list:
        if len(word) > max_word[1]:
            max_word[0], max_word[1] = word, len(word)
    return max_word

# testing
sentences = ["Margaret's toy is a pretty doll.", 
             "A thing of beauty is a joy forever.", 
             "Forgetfulness is by all means powerless!"]
for sentence in sentences:
    print(f"The longest word in '{sentence}': {longest_word(sentence)[0]}")



    