string = "It's thanksgiving day. It's my birthday too!"
print string.find("day")
print string.replace("day", "month", 1)
x = [2,52,-2,7,12,98]
print min(x)
print max(x)
x = ['hello', 2, 54, -2, 7, 12, 98, 'world']
print len(x)
print x[0], x[7]
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
# print x
y = x[0:len(x)/2]
print y
z = x[(len(x)/2)-1:]
z[0] = y
print z
