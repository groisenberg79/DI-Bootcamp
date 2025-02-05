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
#
# since the instructions to this exercise were vague w.r.t.
# what it means by "track the right/wrong answers", I simply
# assumed that
#  
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

print(question_gen(data))

