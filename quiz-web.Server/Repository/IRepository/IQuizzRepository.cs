using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;

namespace quiz_web.Server.Repository.IRepository
{
    public interface IQuizzRepository
    {
        Task<PagedResult<Quizz>> GetAllAsync(
        int category,
        bool? isPurchased = null,
        string sortBy = "CreatedAt",
        bool descending = false,
        int index = 1, int size = 10);

        Task<Quizz?> GetByIdAsync(int id);

        Task<bool> UpdateAsync(int id, Quizz quizz);

        Task<bool> DeleteAsync(int id);
        Task<Quizz> CreateAsync(Quizz quizz);
    }
}
