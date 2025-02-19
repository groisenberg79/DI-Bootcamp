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

        query = f'''
        INSERT INTO 
            menu_items (item_name, item_price)
        VALUES
            ('{self.name}', '{self.price}')
        '''
        cursor.execute(query)
        connection.commit()

    def delete(self):
        query = f'''DELETE FROM
                        menu_items
                    WHERE
                        item_name = '{self.name} AND item_price = '{self.price}'
                '''
        cursor.execute(query)
        connection.commit()

    def update(self, name, price):
        self.name = name
        self.price = price

connection.close()

# item = MenuItem('pasta', 50)
# item2 = MenuItem('pizza', 60)
# item3 = MenuItem('Filet Mignon', 100)
# item4 = MenuItem('lasagna', 45)

# item2.save()
# item3.save()
# item4.save()