import datetime

today = datetime.datetime.now()
jan_first = datetime.datetime(2026, 1, 1)
delta_time = jan_first - today

print("today: ", today.strftime("%x at %X"))
print("january: ", jan_first.strftime("%x at %X"))
print("the 1st of January is in", str(delta_time)[:-6])
