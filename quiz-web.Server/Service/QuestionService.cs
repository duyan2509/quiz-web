using quiz_web.Server.Data.DTO;
using quiz_web.Server.Service.IService;

namespace quiz_web.Server.Service
{
    public class QuestionService : IQuestionService
    {
        public Task<List<QuestionDto>> CreateQuestionsAsync(List<CreateQuestionDto> createQuestionDto, int quizzId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int QuestionId)
        {
            throw new NotImplementedException();
        }

        public Task<List<QuestionDto>> UpdateQuestionsAsync(List<QuestionDto> updateQuestionDto)
        {
            throw new NotImplementedException();
        }
    }
}
