def rotatePixcelMatrix90(matrix):
    N = len(matrix)
    if (N <= 1):
        return matrix
    i, j = (0, 0)
    while (i < N and j < N):
        tmp = matrix[i][j]
        matrix[i][j] = matrix[i][]
