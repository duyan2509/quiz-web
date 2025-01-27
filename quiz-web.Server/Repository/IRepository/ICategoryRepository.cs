using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Repository.IRepository
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetAllAsync();
        Task<Category> CreateAsync(Category category);
        Task<bool> DeleteAsync(int id);
    }
}
