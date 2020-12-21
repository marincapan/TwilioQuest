import sys 

a=[]
counter = 0
for arg in sys.argv:
    a.append(str(counter)+". "+arg)
    counter+=1
    
del(a[0])

for i in a:
    print(i)