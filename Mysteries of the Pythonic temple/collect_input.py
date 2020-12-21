import sys 

a=[]
for arg in sys.argv:
    a.append(arg)

del(a[0])

for i in a: 
    print(i) 