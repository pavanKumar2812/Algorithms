import math
def is_prime(num:int)-> bool:
    if num < 2: # Prime numbers start from 2
        return False
    # for i in range(2, int(num ** 0.5) + 1):
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

# Test cases
print(is_prime(7))   # True
print(is_prime(10))  # False
print(is_prime(2))   # True
print(is_prime(1))   # False
print(is_prime(9))   # False