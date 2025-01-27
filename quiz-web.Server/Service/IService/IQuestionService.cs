using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Service.IService
{
    public interface IQuestionService
    {
        Task<List<QuestionDto>> UpdateQuestionsAsync(List<QuestionDto> updateQuestionDto);
        Task<List<QuestionDto>> CreateQuestionsAsync(List<CreateQuestionDto> createQuestionDto, int quizzId);

        Task<bool> DeleteAsync(int QuestionId);

    }
}
