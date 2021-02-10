n=int(input('enter input'))
a=0
b=1
print(1)
print(2)
for i in range(2,n):
    if i%2==0:
        c=a+b
        a=b
        b=c
        print(c)
    else:
        for j in range(3, n+2):
            if j > 1:
                for k in range(2, i):
                    if j % k == 0:
                        break
                else:
                    print(j)
                    break