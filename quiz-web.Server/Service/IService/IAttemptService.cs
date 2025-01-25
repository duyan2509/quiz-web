using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;

namespace quiz_web.Server.Service.IService
{
    public interface IAttemptService
    {
        Task<Attempt> CreateAsync(Attempt attempt);
        /// <summary>
        /// history attempt
        /// </summary>
        /// <param name="index"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        Task<PagedResult<Attempt>> GetAllByUserIdAsync(int index, int size);
        /// <summary>
        /// leader board
        /// </summary>
        /// <param name="index"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        Task<PagedResult<Attempt>> GetAllByQuizzIdAsync(int quizzId ,int index, int size);
        /// <summary>
        /// specific history attempt 
        /// </summary>
        /// <param name="index"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        Task<PagedResult<Attempt>> GetAllByUserAndQuizzAsync(int index, int size);

    }
}
