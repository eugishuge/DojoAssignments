data = ['magical unicorns', 19, 'hello', 98.98, 'world']
# def output (data):
sum = 0
string = ''
IntCount = 0
StrCount = 0

for ele in data:
    if(type(ele) == int) or (type(ele)=='float'):
        sum = sum + ele
        IntCount += 1
        print sum
        print IntCount

    elif(type(ele)== str):
        string = string + ele + ' '
        StrCount +=1
        print string
        print StrCount
