using Microsoft.AspNetCore.Mvc.RazorPages;
using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;

namespace quiz_web.Server.Service.IService
{
    public interface IQuizzService
    {
        Task<PagedResult<QuizzDto>> GetAllAsync(
            int category,
            bool? isPurchased = null,
            string sortBy = "CreatedAt",  // Default sort: by CreatedAt
            bool descending = false,     // Default: ascending
            int index=1, int size=10);
        Task<QuizzDetailDto> GetByIdAsync(int id);
        Task<QuizzDetailDto> UpdateAsync(int id, QuizzModifyDto quizzModifyDto);

        Task<bool> DeleteAsync(int id);
        Task<QuizzDetailDto> CreateAsync(QuizzCreateDto quizzCreateDto);
    }
}
