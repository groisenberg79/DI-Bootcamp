import datetime

def living_minutes(user_date):
    user_date = user_date.split('/')
    date_list = [int(x) for x in user_date]
    date_format = datetime.datetime(date_list[0], 
                                date_list[1], date_list[2], 0, 0, 0)
    now = datetime.datetime.now()   
    minutes = int((now - date_format).total_seconds()/60)
    print(f"You have lived {minutes} minutes so far.")

living_minutes('2024/02/12')

