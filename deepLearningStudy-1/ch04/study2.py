# coding: utf-8
import numpy as np
import matplotlib.pylab as plt


#数値勾配
def numerical_gradient(f, x) :
    h = 1e-4
    grad = np.zeros_like(x)

    for idx in range(x.size) :
        tmp_val = x[idx]
        x[idx] = tmp_val + h
        fxh1 = f(x)

        x[idx] = tmp_val - h
        fxh2 = f(x)

        grad[idx] = (fxh1 - fxh2) / (2 * h)
        x[idx] = tmp_val
    
    return grad

def gradient_descent(f, init_x, lr=0.01, step_num=100) :
    x = init_x
    global x0
    global x1

    for i in range(step_num) :
        grad = numerical_gradient(f, x)
        x -= lr * grad
        x0.append(x[0])
        x1.append(x[1])
        print(x)

    return x

def function_2(x) :
    return x[0]**2 + x[1]**2


x = np.array([2, 3, 4, 10, 0.2, -4])
x0 = []
x1 = []

init_x = np.array([-3.0, 4.0])
result = gradient_descent(function_2, init_x=init_x, lr=0.1, step_num=100)

print(result)

range = np.arange(0, 100, 1)
plt.xlabel("count")
plt.xlabel("y")


plt.plot(x0,x1)

plt.show()

