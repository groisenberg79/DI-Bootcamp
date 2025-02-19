import psycopg2

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
class MenuItem:
    def __init__(self,name, price):
        self.name = name
        self.price = price

    def save(self):
        '''This function saves the data
         from a MenuItem object into the menu_items table'''
        query = f'''
        INSERT INTO 
            menu_items (item_name, item_price)
        VALUES
            ('{self.name}', '{self.price}')
        '''
        cursor.execute(query)
        connection.commit()

    def delete(self):
        '''This function deletes the data
        from a MenuItem object from the menu_items table'''
        query = f'''DELETE FROM
                        menu_items
                    WHERE
                        item_name = '{self.name}'
                '''
        cursor.execute(query)
        connection.commit()

    # Here, I'm assuming the user will only type 
    # a valid price (i.e. positive integer, which is the 
    # type of the value in the table). 
    def update(self, name, price):
        '''This function updates the row corresponding to
        a MenuItem object with new item_name and item_price'''
        query = f'''UPDATE 
                        menu_items
                    SET
                        item_name = '{name}', item_price = '{price}'
                    WHERE 
                        item_name = '{self.name}' '''
        cursor.execute(query)
        connection.commit()        

# item = MenuItem('pasta', 50)
# item2 = MenuItem('pizza', 60)
# item2.save()
