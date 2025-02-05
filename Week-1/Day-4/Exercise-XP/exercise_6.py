# item 1
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_names):
    for magician in magician_names:
        print(magician)
show_magicians(magician_names)

def make_great(magician_names):
    for i in range(len(magician_names)):
        new_magician = "The Great "+ magician_names[i]
        magician_names[i] = new_magician
make_great(magician_names)
show_magicians(magician_names)



