using Microsoft.EntityFrameworkCore;
using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;

namespace quiz_web.Server.Repository.IRepository
{
    public interface IAttemptRepository
    {
        public Task<Attempt> CreateAsync(Attempt attempt);
        public Task<PagedResult<Attempt>> GetAllByUserIdAsync(int userId, int index = 1, int size = 10);
        public Task<PagedResult<Attempt>> GetLeaderboardAsync(int quizzId, int index = 1, int size = 10);
        public Task<PagedResult<Attempt>> GetAllByUserAndQuizzAsync(int userId, int quizzId, int index = 1, int size = 10);
        public Task<Attempt> GetByIdAsync(int attemptId);
        public Task<Attempt> SetScore(int attemptId);
        public Task<PagedResult<Result>> GetAllResults(int attemptId, int index, int size);
        Task<List<Result>> CreateResultsAsync(List<Result> results, int attempt_id);

    }
}
