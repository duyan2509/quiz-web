using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Repository.IRepository;
using quiz_web.Server.Service.IService;

namespace quiz_web.Server.Service
{
    public class CategoryService : ICategoryService
    {
        ICategoryRepository _categoryRepository;
        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public async Task<CategoryDto> CreateAsync(CategoryDto category)
        {
            var categoryEntity = new Category
            {
                Name = category.Name
            };
            var result = await _categoryRepository.CreateAsync(categoryEntity);
            return new CategoryDto
            {
                Id = result.Id,
                Name = result.Name,
                Amount = 0
            };
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var result = await _categoryRepository.DeleteAsync(id);
            return result;
        }

        public async Task<IEnumerable<CategoryDto>> GetAllAsync()
        {
            var result = await _categoryRepository.GetAllAsync();
            return result.Select(c => new CategoryDto
            {
                Id = c.Id,
                Name = c.Name,
                Amount = c.Quizzes?.Count ?? 0
            });
        }
    }
}
