data = ['magical unicorns',19,'hello',98.98,'world']

sum = 0
string = ""
arrtype = []

for i in data:

    if (type(i) == str):
        string = string + " " + i

    elif (type(i) == int):
        sum = sum +i

    elif (type(i) == float):
        sum = sum + i

for x in data:
    # print type(x)
    if type(x) not in arrtype:
        arrtype.append(type(x))
        print arrtype
        if(len(arrtype) > 1):
            print "you have a mixed array"
        else:
            print "you array is of", type(x), "Type"

print 'String:', string
print "Sum:", sum

# data1 = ['a', 'b']
# data2 = ['a', 1]
# data3 = [1, 2]
# arrType = []
#
# for ele in data2:
#     print type(ele)
#     if type(ele) not in arrType:
#         arrType.append(type(ele))
#
# if (len(arrType) > 1):
#     print "You have a mixed array"
#
# print arrType

#===================================
list2 = [2,3,1,7,4,12]
sum = 0
newarr = []

for i in list2:
    sum = sum + i
    # print type(i)
if type(i) not in newarr:
    newarr.append(type(i))
    # print newarr
    if (len(newarr) > 1):
        print "You have a mixed array type"
    else:
        print "Your array is of", type(i), "type"


print 'Sum:', sum
#====================================
list3 = ['magical','unicorns']

sum = 0
newarr1 = []
string = ""

for ele in list3:
    if(type(ele) == str):
        string = string + " " + ele

for ele in list3:
    if (type(ele) not in newarr1):
        newarr1.append(type(ele))
        print newarr1
        if (len(newarr1)>1):
            print "you have a mixed array"
        else:
            print "your array is of", type(ele), "type"
print string

# Now that you know more about python functions, can you write one function that could check all 3 lists?
