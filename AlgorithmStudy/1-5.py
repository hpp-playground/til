def canChangeStringToAnotherBy1Edit(string, another):
    if (abs(len(string)-len(another)) >= 2):
        return False
    if (len(string) < len(another)):
        tmp = string
        string = another
        another = string
    if (len(string) == len(another)):
        flag = False
        for st, an in zip(string, another):
            if (st != an):
                if (flag):
                    return False
                else:
                    flag = True
        return True
    else:
        flag = False
        index1, index2 = (0, 0)
        while (index1 < len(string)):
            if (string[index1] == another[index2]):
                index1 += 1
                index2 += 1
            else:
                if (flag):
                    return False
                else:
                    index1 += 1
                    flag = True
        return True
        
if __name__ == "__main__":
    print(canChangeStringToAnotherBy1Edit("apple", "aggle"))
            
