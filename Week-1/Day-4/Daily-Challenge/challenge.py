matrix = [["7", "i", "i"],
          ["T", "s", "x"],
          ["h", "%", "?"],
          ["i", " ", "#"],
          ["s", "M", " "],
          ["$", "a", " "],
          ["#", "t", "%"],
          ["^", "r", "!"]]

secret_message = ""
for j in range(3):
    for i in range(8):
        if matrix[i][j].isalpha():
            secret_message = secret_message + matrix[i][j]
        else:
            secret_message = secret_message + " "
print(secret_message)





