using Microsoft.EntityFrameworkCore;
using quiz_web.Server.Data;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Repository.IRepository;

namespace quiz_web.Server.Repository.SQLRepository
{
    public class QuestionRepository : IQuestionRepository
    {
        QDbContext _context;
        public QuestionRepository(QDbContext context)
        {
            _context = context;
        }
        public async Task<AnswerCount> CreateAnswerCountAsync(int questionId)
        {
            var existingAnswerCount = await _context.Answers
                .FirstOrDefaultAsync(a => a.QuestionId == questionId);

            if (existingAnswerCount != null)
            {
                return existingAnswerCount;
            }

            var newAnswerCount = new AnswerCount
            {
                QuestionId = questionId,
                CntOpt1 = 0,
                CntOpt2 = 0,
                CntOpt3 = 0,
                CntOpt4 = 0
            };

            _context.Answers.Add(newAnswerCount);

            await _context.SaveChangesAsync();

            return newAnswerCount;
        }

        public async Task<List<Question>> CreateAsync(List<Question> questions)
        {
            await _context.Questions.AddRangeAsync(questions);

            await _context.SaveChangesAsync();

            return questions;
        }

        public async Task<bool> DeleteAsync(int questionId)
        {
            var question = await _context.Questions
                .FirstOrDefaultAsync(q => q.Id == questionId);

            if (question == null)
            {
                return false;
            }

            _context.Questions.Remove(question);

            await _context.SaveChangesAsync();

            return true;
        }


        public async Task<AnswerCount> UpdateAnswerCountAsync(int questionId, string selectedOption)
        {
            var questionAnswerCount = await _context.Questions
                .Include(q=> q.AnswerCount)
                .FirstOrDefaultAsync(a => a.Id == questionId);
            if (questionAnswerCount == null || questionAnswerCount.AnswerCount == null)
            {
                throw new ArgumentException("Question or AnswerCount not found.");
            }
            switch (selectedOption)
            {
                case var option when option == questionAnswerCount.Opt1:
                    questionAnswerCount.AnswerCount.CntOpt1++;
                    break;
                case var option when option == questionAnswerCount.Opt2:
                    questionAnswerCount.AnswerCount.CntOpt2++;
                    break;
                case var option when option == questionAnswerCount.Opt3:
                    questionAnswerCount.AnswerCount.CntOpt3++;
                    break;
                case var option when option == questionAnswerCount.Opt4:
                    questionAnswerCount.AnswerCount.CntOpt4++;
                    break;
                default:
                    throw new ArgumentException("Invalid option selected");
            }

            await _context.SaveChangesAsync();

            return questionAnswerCount.AnswerCount;
        }


        public async Task<List<Question>> UpdateAsync(List<Question> questions)
        {
            var updatedQuestions = new List<Question>();

            foreach (var question in questions)
            {
                var existingQuestion = await _context.Questions
                    .FirstOrDefaultAsync(q => q.Id == question.Id);

                // If the question exists, update its properties
                if (existingQuestion != null)
                {
                    existingQuestion = question;
                    _context.Questions.Update(existingQuestion);
                    updatedQuestions.Add(existingQuestion);
                }
            }

            await _context.SaveChangesAsync();

            return updatedQuestions;
        }

    }
}
