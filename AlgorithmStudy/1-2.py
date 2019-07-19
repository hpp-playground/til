#time O(N), but need larger space
def isAsciiPermutationOfAnotherByHash(a,b):
    if (len(a) != len(b)):
        return False
    hash = [0]*128
    for ch in a:
        hash[ord(ch)] += 1
    for ch in b:
        hash[ord(ch)] -= 1
        if hash[ord(ch)] < 0:
            return False
    return True

#time O(N logN), but need smaller space
def isAsciiPermutationOfAnotherBySort(a,b):
    if (len(a) != len(b)):
        return False
    a2 = sorted(a)
    b2 = sorted(b)
    for i in range(len(a2)):
        if (a2[i] != b2[i]):
            return False
    return True
        
if __name__ == "__main__":
    print(isAsciiPermutationOfAnotherByHash("aa11ab", "b1a1aa"))
    print(isAsciiPermutationOfAnotherBySort("a|adaab","aaasdab|"))