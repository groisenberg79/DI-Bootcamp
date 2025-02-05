data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

# item 1
# OBSERVATION: the instructions are vague w.r.t. what it means to 
# "keep track of correct/incorrect answers", but since what it actually asks
# for as an output is a list of wrong answers (I included the respective questions),
# I assumed this "tracking" was not a required output, 
# but only information necessary for the final algorithm to work.

def question_gen (data):
    '''
    -- input: list of dictionaries {'question':<some_question>, 'answer':<answer_to_some_question>} 
    -- output: list of dictionaries {<some_question>:<wrong_user_answer>}
    '''

    wrong_answers = []
    for i in range(len(data)):
        answer = input(data[i]['question']).lower()
        if answer != data[i]['answer'].lower():
            wrong_answers.append({data[i]['question']: answer})
    return wrong_answers

wrong = question_gen(data)
print(wrong)

def number_wrong(data, wrong_answers):
    print(f"The number of correct answers is {len(data) - len(wrong_answers)}.")
    print(f"The number of incorrect answers is {len(wrong_answers)}.")
    
number_wrong(data, wrong)
