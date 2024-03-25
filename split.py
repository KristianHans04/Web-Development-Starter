# 1st code with josh's approach
class Solution(object):
    def reverseWords(self, s):
        break_down = s.split()
        inverse_words = [word[::-1] for word in break_down] # To reverse the individual order of characters of words in s. # 'How', 'are', 'you' ....
        reversed_sent = ' '.join(inverse_words) # variable stores the combination of the reversed words as a sent.
        return reversed_sent
        
        s = "Habari yako" # 'Habari', 'Yako'
        reversed_sent = reverseWords(s)
        print(reversed_sent)

# 2nd code with Kristian and Ngatia's approach

class Solution(object):
    def reverseWords(self, s):
        break_down = s.split()
        huha = []
        for i in range(len(break_down)):
           inverse = break_down[i][::-1]
           huha.append(inverse)
        b = " ".join(huha)
        return b

solution = Solution()

s = "Hello guys I'm a guitarist."
b = solution.reverseWords(s)
print(b)
