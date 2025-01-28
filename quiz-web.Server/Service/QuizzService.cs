using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;
using quiz_web.Server.Repository.IRepository;
using quiz_web.Server.Service.IService;

namespace quiz_web.Server.Service.Service
{
    public class QuizzService : IQuizzService
    {
        IQuestionRepository _questionRepository;
        IQuizzRepository _quizzRepository;
        public QuizzService(IQuizzRepository quizzRepository, IQuestionRepository questionRepository)
        {
            _quizzRepository = quizzRepository;
            _questionRepository = questionRepository;
        }
        public async Task<QuizzDetailDto> CreateAsync(QuizzCreateDto quizzCreateDto)
        {
            var quizz = new Quizz
            {
                Price = quizzCreateDto.Price,
                Title = quizzCreateDto.Title,
                Duration = quizzCreateDto.Duration,
                CategoryId = quizzCreateDto.CategoryId,
                Notes = quizzCreateDto.Notes,
                AuthorId = quizzCreateDto.AuthorId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            var createdQuizz = await _quizzRepository.CreateAsync(quizz);
            if (quizzCreateDto.Questions != null && quizzCreateDto.Questions.Any())
            {
                var questions = new List<Question>();

                foreach (var questionDto in quizzCreateDto.Questions)
                {
                    var question = new Question
                    {
                        QuizzId = createdQuizz.Id,
                        Content = questionDto.Content,
                        Opt1 = questionDto.Opt1,
                        Opt2 = questionDto.Opt2,
                        Opt3 = questionDto.Opt3,
                        Opt4 = questionDto.Opt4
                    };

                    questions.Add(question);
                }

                var createdQuestions = await _questionRepository.CreateAsync(questions);

                foreach (var question in createdQuestions)
                {
                    await _questionRepository.CreateAnswerCountAsync(question.Id);
                }
            }

            var quizzDetailDto = new QuizzDetailDto
            {
                Id = createdQuizz.Id,
                Title = createdQuizz.Title,
                Duration = createdQuizz.Duration,
                Notes = createdQuizz.Notes,
                Price = createdQuizz.Price,
                CreatedAt = createdQuizz.CreatedAt,
                UpdatedAt = createdQuizz.UpdatedAt
            };

            return quizzDetailDto;
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<QuizzDto>> GetAllAsync(int category, bool? isPurchased = null, string sortBy = "CreatedAt", bool descending = false, int index = 1, int size = 10)
        {
            throw new NotImplementedException();
        }

        public Task<QuizzDetailDto> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<QuizzDetailDto> UpdateAsync(int id, QuizzModifyDto quizzModifyDto)
        {
            throw new NotImplementedException();
        }
    }
}
