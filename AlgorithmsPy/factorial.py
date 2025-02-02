# def factorial(num:int):
#     if num == 0 or num == 1:
#         return 1
#     result = 1
#     for i in range(1, num + 1):
#         result = result * i
#     return result

def recursive_factorial(num:int)->int:
    if num == 0 or num == 1:
        return 1
    return num * recursive_factorial(num - 1)

if __name__ == "__main__":
    # print(factorial(3)) # 6
    # print(factorial(4)) # 24
    # print(factorial(5)) # 120

    print(recursive_factorial(3)) # 6
    print(recursive_factorial(4)) # 24
    print(recursive_factorial(5)) # 120