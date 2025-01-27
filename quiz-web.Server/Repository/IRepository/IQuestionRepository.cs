using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Repository.IRepository
{
    public interface IQuestionRepository
    {
        Task<List<Question>> CreateAsync(List<Question> questions);
        Task<List<Question>> UpdateAsync(List<Question> questions);
        Task<bool> DeleteAsync(int questionId);
        Task<AnswerCount> CreateAnswerCountAsync(int QuestionId);
        Task<AnswerCount> UpdateAnswerCountAsync(int QuestionId, string selectedOption);
    }
}
