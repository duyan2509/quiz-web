using Microsoft.EntityFrameworkCore;
using quiz_web.Server.Data;
using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Repository.IRepository;

namespace quiz_web.Server.Repository.SQLRepository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly QDbContext _context;
        public CategoryRepository(QDbContext context)
        {
            _context = context;
        }

        public async Task<Category> CreateAsync(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return false;
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            var catgories = await _context.Categories
                .Include(c => c.Quizzes)
                .ToListAsync() ;
            return catgories;
        }
    }
}
