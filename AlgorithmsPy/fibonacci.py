def fibonacci(num:int)->int:
    if num==0:
        return 0
    elif num==1:
        return 1

    first_num, second_num = 0, 1
    for _ in range(2, num+1):
        result = first_num + second_num
        first_num, second_num = second_num, result
    return result

if __name__ == "__main__":
    print(fibonacci(3))
    print(fibonacci(4))
    print(fibonacci(5))