import sys
a = int(sys.argv[1])
b = int(sys.argv[2])
c = a+b

if (c<=0):
    print("You have chosen the path of destitution.")
elif(c>1 and c<=100):
    print("You have chosen the path of plenty.")
elif(c>100):
    print("You have chosen the path of excess.")