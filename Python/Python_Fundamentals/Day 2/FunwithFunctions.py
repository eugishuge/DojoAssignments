# def odd_even (nums):
#     for ele in range (0,nums):
#         if (ele % 2 == 0):
#             print "Number is", ele, "This is an Even number"
#         elif(ele % 2 ==1):
#             print "Number is", ele, "This is an Odd Number"
# odd_even(2001)

a = [2,4,5]
newarr = []

for elem in a:
    newarr.append([])
    # print newarr

count = 0
for elem in a:
    # print elem
    for y in range (0, elem):
        newarr[count].append("1")
    count +=1
print newarr
