using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Repository.IRepository
{
    public interface ICategoryRepository
    {
        public  Task<IEnumerable<Category>> GetAllAsync();
        public  Task<Category> CreateAsync(Category category);
        public  Task<bool> DeleteAsync(int id);
    }
}
