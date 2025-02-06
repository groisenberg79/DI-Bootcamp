# -- FOR THE TA: At first, I thought the exercise was asking us to 
# find the 'secret word' without caring for how
# the matrix was coded; but now I realize we have
# to unpack the initial string into a matrix through
# an algorithm (*not* hardcoding the matrix as I 
# initially did in the first version of the solution).

matrix_string = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
'''

matrix = []
row_str = ""
for letter in matrix_string:
    if letter == '\n':
        matrix.append(row_str)
        row_str = ""
    else:
        row_str = row_str + letter
for i in range(len(matrix)):
    matrix[i] = list(matrix[i])
print(matrix)

# still need to take care of the extra spaces
secret_message = ""
for j in range(len(matrix[0])):
    for i in range(len(matrix)):
        if matrix[i][j].isalpha():
            secret_message = secret_message + matrix[i][j]
        else:
            secret_message = secret_message + " "
print(secret_message)





