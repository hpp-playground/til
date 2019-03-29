import numpy as np
import matplotlib.pylab as plt
import sys, os
sys.path.append(os.pardir)
import numpy as np
from dataset.mnist import load_mnist

def mean_squared_error(y, t) :
    return 0.5 * np.sum((y - t)**2)

def cross_entropy_error(y, t) :
    if (y.ndim == 1) :
        t = t.reshape(1, t.size)
        y = y.reshape(1, y.size)
    
    batch_size = y.shape[0]
    return -np.sum(t * np.log(y + 1e-7) / batch_size)

def numerical_diff(f, x) :
    h = 1e-4
    return (f(x+h) - f(x-h)) / (2*h)

def function_1(x) :
    return 0.01 * x * x + 0.1 * x

def tangent_line(f, x) :
    d = numerical_diff(f, x)
    y = f(x) - d*x
    #以下の式は（分かりにくいけど）関数を返している
    #つまりこの関数は引数を取って関数を返す
    #接線の公式：y = f(x1) - d*x1 + d*x
    #関数中のyで右辺左2項分をカバーしている
    #よって、これで帰ってくる関数は、引数にした範囲にdを掛けてyを足す
    return lambda t: d*t + y

def function_2(x) :
    return np.sum(x**2)




(x_train, t_train), (x_test, t_test) = load_mnist(normalize=True, one_hot_label=True)

train_size = x_train.shape[0]
batch_size = 10
batch_mask = np.random.choice(train_size, batch_size)

x_batch = x_train[batch_mask]
t_batch = t_train[batch_mask]


print(x_train.shape)
print(t_train.shape)

x = np.arange(0.0, 20.0, 0.1)
y = function_1(x)
plt.xlabel("x")
plt.ylabel("f(x)")
plt.plot(x, y)

tf = tangent_line(function_1, 5)
y2 = tf(x)
plt.plot(x, y2)


plt.show()

print(numerical_diff(function_1, 5))
print(numerical_diff(function_1, 10))

