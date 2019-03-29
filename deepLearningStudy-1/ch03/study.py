import numpy as np
import matplotlib.pylab as plt
import sys, os
import pickle
sys.path.append(os.pardir)
from dataset.mnist import load_mnist
from PIL import Image


#各種活性化関数の実装
def step_function(x) :
    return np.array(x > 0, dtype = np.int)

def sigmoid(x) :
    return 1 / (1 + np.exp(-x))

def relu(x) :
    return np.maximum(0, x)

def identity_function(x) :
    return x

def softmax(x) :
    exp_x = np.exp(x - np.max(x))
    sum_exp_x = np.sum(exp_x)
    return exp_x / sum_exp_x

"""とりあえず実際の値で初期化したやつ
def init_network() :
    network = {}
    network["W1"] = np.array([[0.1, 0.3, 0.5], [0.2, 0.4, 0.6]])
    network["b1"] = np.array([0.1, 0.2, 0.3])
    network["W2"] = np.array([[0.1, 0.4], [0.2, 0.5], [0.3, 0.6]])
    network["b2"] = np.array([0.1, 0.2])
    network["W3"] = np.array([[0.1, 0.3], [0.2, 0.4]])
    network["b3"] = np.array([0.1, 0.2])

    return network


#フローを流す
def forward(network, x) :
    W1, W2, W3 = network["W1"], network["W2"], network["W3"]
    b1, b2, b3 = network["b1"], network["b2"], network["b3"]

    a1 = np.dot(x, W1) + b1
    z1 = sigmoid(a1)
    a2 = np.dot(z1, W2) + b2
    z2 = sigmoid(a2)
    a3 = np.dot(z2, W3) + b3
    
    y = identity_function(a3)

    return y
"""

#画像表示用の関数
def img_show(img) :
    pil_img = Image.fromarray(np.uint8(img))
    pil_img.show()

def get_data() :
    (x_train, t_train), (x_test, t_test) = load_mnist(normalize=True, flatten=True, one_hot_label=False)
    return x_test, t_test

def init_network() :
    with open("sample_weight.pkl", "rb") as f :
        network = pickle.load(f)
    return network

#フローを流す
def predict(network, x) :
    W1, W2, W3 = network["W1"], network["W2"], network["W3"]
    b1, b2, b3 = network["b1"], network["b2"], network["b3"]

    a1 = np.dot(x, W1) + b1
    z1 = sigmoid(a1)
    a2 = np.dot(z1, W2) + b2
    z2 = sigmoid(a2)
    a3 = np.dot(z2, W3) + b3

    y = softmax(a3)

    return y


(x_train, t_train), (x_test, t_test) = load_mnist(flatten=True, normalize=False)

print(x_train.shape)
print(t_train.shape)
print(x_test.shape)
print(t_test.shape)

img = x_train[0]
label = t_train[0]
print(label)

print(img.shape)
img = img.reshape(28, 28)
print(img.shape)

x, t = get_data()
network = init_network()

batch_size = 100
accurancy_cnt = 0

for i in range(0, len(x), batch_size) :
        x_batch = x[i:i+batch_size]
        y_batch = predict(network, x_batch)
        p = np.argmax(y_batch, axis=1)
        accurancy_cnt += np.sum(p == t[i:i+batch_size])

print("Accurancy:" + str(float(accurancy_cnt) / len(x)))