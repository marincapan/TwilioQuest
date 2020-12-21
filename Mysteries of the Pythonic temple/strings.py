import sys 

a=[]
for arg in sys.argv:
    a.append(arg)

del(a[0])

b = ""

for i in a:
    b+=i.upper()
    b+=" "

b=b.rstrip(" ")
b+="!!!"

print(b)