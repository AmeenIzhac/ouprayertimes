from datetime import datetime, timedelta

with open('prayer_times_2025_unadjusted.txt', 'r') as file:
    data = file.read()

def adjust_time(row):
    columns = row.split('\t')
    time3 = datetime.strptime(columns[3], "%H:%M") - timedelta(minutes=4)
    time5 = datetime.strptime(columns[5], "%H:%M") - timedelta(minutes=2)
    time6 = datetime.strptime(columns[6], "%H:%M")
    columns[3] = time3.strftime("%H:%M")
    columns[5] = time5.strftime("%H:%M")
    threshold = datetime.strptime("18:30", "%H:%M")
    if time6 < threshold:
        columns[6] = threshold.strftime("%H:%M")
    return '\t'.join(columns)

lines = data.strip().split('\n')
header = lines[0]  
processed_lines = [adjust_time(line) for line in lines]

res = ""

for line in processed_lines:
    res += line + '\n'

with open('prayer_times_2025.txt', 'w') as file:
    file.write(res)

# have adjusted by subtracting 4 and 2 minutes for duhr and mughrib respectively but need to set isha 18:30 etc



# fajr    = shurooq - 30 mins rounded down to nearest 15 minutes
# duhr    = nearest 30 mins hour after athan
# asr     = nearest 10 minutes after athan
# mughrib = athan time
# isha    = 18:30 if athan before 18:30, otherwise athan time