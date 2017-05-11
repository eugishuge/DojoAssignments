data = ['hello','world','my','name','is','Anna']
char = 'o'
newlist =[]
# print data[0]

for val in range (0,len(data)):
    if char in data[val]:
        newlist.append(data[val])

print newlist
