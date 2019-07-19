def compressString(string):
    if (len(string)<=1):
        return string
    left, right = (0, 1)
    store = []
    while (right < len(string)):
        if (string[left] == string[right]):
            right += 1
        else:
            store.append(string[left]+str(right - left))
            left = right
            right += 1
    store.append(string[left]+str(right - left))
    compressed = "".join(store)
    return compressed if (len(compressed) < len(string)) else string


if __name__ == "__main__":
    print(compressString("aabcccccaaa"))
    print(compressString("ab"))