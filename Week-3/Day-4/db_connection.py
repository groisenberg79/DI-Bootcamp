import psycopg2

connection = psycopg2.connect(database = 'countries',
                              host = 'localhost', 
                              user = 'postgres', 
                              password = '4519',
                              port = '5432')

cursor = connection.cursor()

cursor.execute('''CREATE TABLE random_countries
               (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL,
               capital VARCHAR(100),
               flag_code VARCHAR(100) NOT NULL,
               subregion VARCHAR(100) NOT NULL,
               population INTEGER''')

connection.commit()
print('Table was created.')