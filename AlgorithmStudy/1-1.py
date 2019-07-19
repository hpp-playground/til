#use large memory
def isOriginalAsciiStringByHash(string):
    hash = [None]*128
    for ch in string:
        if (not hash[ord(ch)]):
            hash[ord(ch)] = True
        else:
            return False
    return True

#use less memomy
def isOriginalAsciiStringByBit(string):
    hashBit = 0
    for ch in string:
        if (hashBit & (1 << (ord(ch)))):
            return False
        else:
            hashBit |= 1 << (ord(ch))
    return True

if __name__ == "__main__":
    print(isOriginalAsciiStringByHash("|abcdksz"))
    