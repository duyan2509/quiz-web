using Microsoft.EntityFrameworkCore;
using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;
using quiz_web.Server.Repository.IRepository;

namespace quiz_web.Server.Repository.SQLRepository
{
    public class AttemptRepository : IAttemptRepository
    {
        public Task<Attempt> CreateAsync(Attempt attempt)
        {
            throw new NotImplementedException();
        }

        public Task<List<Result>> CreateResultsAsync(List<Result> results, int attempt_id)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<Attempt>> GetAllByUserAndQuizzAsync(int userId, int quizzId, int index = 1, int size = 10)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<Attempt>> GetAllByUserIdAsync(int userId, int index = 1, int size = 10)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<Result>> GetAllResults(int attemptId, int index, int size)
        {
            throw new NotImplementedException();
        }

        public Task<Attempt> GetByIdAsync(int attemptId)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<Attempt>> GetLeaderboardAsync(int quizzId, int index = 1, int size = 10)
        {
            throw new NotImplementedException();
        }

        public Task<Attempt> SetScore(int attemptId)
        {
            throw new NotImplementedException();
        }
    }
}
