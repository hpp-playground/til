def isAsciiPermutationOfPalindoromeByHash(string):
    string = "".join(string.split())
    hash = [0]*128
    for ch in string:
        hash[ord(ch)] += 1
    flag = False
    for hs in hash:
        if (hs%2 == 1):
            if (flag):
                return False
            else:
                flag = True
    return True


def isAsciiPermutationOfPalindoromeByBit(string):
    string = "".join(string.split())
    hashBit = 0
    for ch in string:
        hashBit ^= 1 << ord(ch)
    return not (hashBit & (hashBit-1))
    

if __name__ == "__main__":
    print(isAsciiPermutationOfPalindoromeByBit("hash"))