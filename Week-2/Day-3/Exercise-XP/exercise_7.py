from faker import Faker

fake = Faker()
users = [{}]
for i in range(10):
    user = {'name':fake.name(), 'address':fake.address(),
     'language_code':fake.language_code()}
    users.append(user)

for user in users:
    print(user)