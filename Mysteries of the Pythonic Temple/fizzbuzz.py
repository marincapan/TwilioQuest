import sys

for i in range(1, len(sys.argv)):
    if(int(sys.argv[i])%3==0 and int(sys.argv[i])%5==0):
        print("fizzbuzz")
    elif(int(sys.argv[i])%3==0):
        print("fizz")
    elif(int(sys.argv[i])%5==0):
        print("buzz")
    
    else:
        print(int(sys.argv[i]))