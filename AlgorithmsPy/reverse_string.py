# def reverse_string(user_input:str):
#     return user_input[::-1]

def reverse_string(user_input:str):
    rev_input = ""
    for i in user_input:
        rev_input = i + rev_input
    return rev_input

if __name__ == "__main__":
    print(reverse_string("hello"))
    print(reverse_string("pavan"))