import json
import datetime

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)
salary = data['company']['employee']['payable']['salary']
print(salary)

data['company']['employee']['date_of_birth'] = '1980-04-04'
print(data)

dataJson = json.dumps(data, indent=2)
print(dataJson)
