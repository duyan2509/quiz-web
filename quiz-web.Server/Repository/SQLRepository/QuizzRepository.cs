using Microsoft.EntityFrameworkCore;
using quiz_web.Server.Data;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;
using quiz_web.Server.Repository.IRepository;

namespace quiz_web.Server.Repository.SQLRepository
{
    public class QuizzRepository : IQuizzRepository
    {
        QDbContext _context;
        public QuizzRepository(QDbContext context)
        {
            _context = context;
        }
        public async Task<Quizz> CreateAsync(Quizz quizz)
        {
            var result = await _context.Quizzs.AddAsync(quizz);
            return result.Entity;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var quizz =  _context.Quizzs.Find(id);
            if (quizz==null)
            {
                return false;
            }

            _context.Quizzs.Remove(quizz);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<PagedResult<Quizz>> GetAllAsync(int category, bool? isPurchased = null, string sortBy = "CreatedAt", bool descending = false, int index = 1, int size = 10)
        {
            var query = _context.Quizzs.AsQueryable();

            query = query.Where(q => q.CategoryId == category);

            //if (isPurchased.HasValue)
            //{
            //    query = query.Where(q => q.IsPurchased == isPurchased.Value);
            //}

            switch (sortBy)
            {
                case "CreatedAt":
                    query = descending ? query.OrderByDescending(q => q.CreatedAt) : query.OrderBy(q => q.CreatedAt);
                    break;
                case "Name":
                    query = descending ? query.OrderByDescending(q => q.Name) : query.OrderBy(q => q.Name);
                    break;
                default:
                    query = descending ? query.OrderByDescending(q => q.CreatedAt) : query.OrderBy(q => q.CreatedAt);
                    break;
            }

            var totalCount = await query.CountAsync();

            var quizzes = await query.Skip((index - 1) * size).Take(size).ToListAsync();

            var pagedResult = new PagedResult<Quizz>
            {
                Items = quizzes,
                TotalItems = totalCount,
                PageNumber = index,
                PageSize = size
            };

            return pagedResult;
        }

        public async Task<Quizz> GetByIdAsync(int id)
        {
            var quizz = await _context.Quizzs
                .Include(q=>q.Questions)
                .FirstOrDefaultAsync(q=>q.Id==id);
            return quizz;
        }

        public async Task<bool> UpdateAsync(int id, Quizz quizz)
        {
            var existingQuizz = await _context.Quizzs
                    .Include(q => q.Questions)
                    .FirstOrDefaultAsync(q => q.Id == id);

            if (existingQuizz == null)
            {
                return false; 
            }

            existingQuizz.Title = quizz.Title; 
            existingQuizz.Notes = quizz.Notes; 
            existingQuizz.Questions = quizz.Questions; 

            await _context.SaveChangesAsync();

            return true; 
        }
    }
}
