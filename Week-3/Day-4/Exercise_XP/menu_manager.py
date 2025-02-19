import psycopg2
import menu_item

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '4519'
DATABASE = 'restaurant'
PORT = '5432'

connection = psycopg2.connect(  
    host=HOSTNAME, 
    user=USERNAME, 
    password=PASSWORD, 
    dbname=DATABASE,
    port=PORT
)

cursor = connection.cursor()

class MenuManager:
    def get_by_name(name):
        '''This function takes a name (string) and
        returns a MenuItem object with name and
        price from a row in menu_items if item_name = name
        in the table, and returns None if no such row exists'''
        query = f'''SELECT * FROM 
                        menu_items
                    WHERE
                        menu_items.item_name = '{name}' '''
        cursor.execute(query)
        output = cursor.fetchall()
        if output == []:
            return None
        else:
            return menu_item.MenuItem(output[0][1], output[0][2])

    def all_items():
        '''This function returns a list of MenuItem objects
        corresponding to the rows in the menu_items table'''
        query = f'''SELECT * FROM menu_items'''
        cursor.execute(query)
        output = cursor.fetchall()
        list_of_menu_items = list ()
        for item in output:
            actual_item = menu_item.MenuItem(item[1], item[2])
            list_of_menu_items.append(actual_item)
        return list_of_menu_items

# complete_list = MenuManager.all_items()
# for food in complete_list:
#     print(f'item: {food.name}, price: {food.price}')
# print(MenuManager.get_by_name('pizza').name)
# print(MenuManager.get_by_name('pizza').price)
# print(MenuManager.get_by_name('burguer'))




