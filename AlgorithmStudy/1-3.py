def replaceSpaceWithPacent20(string):
    spaceCount = 0
    for ch in string:
        if (ch==" "):
            spaceCount += 1
    table = [None]*(len(string)+spaceCount*2)
    i = 0
    for ch in string:
        if (ch != " "):
            table[i] = ch
            i += 1
        else:
            table[i] = "%"
            table[i+1] = "2"
            table[i+2] = "0"
            i += 3
    return "".join(table)

if __name__ == "__main__":
    print(replaceSpaceWithPacent20("Mr John Smith "))
    