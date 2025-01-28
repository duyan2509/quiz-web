using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quiz_web.Server.Data.DTO;
using quiz_web.Server.Service.IService;

namespace quiz_web.Server.Controllers
{
    [Route("api/catgory")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryService categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpPost]
        public IActionResult CreateCategory(CategoryDto categoryDto)
        {
            var result =categoryService.CreateAsync(categoryDto);
            return Ok(result.Result);
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var result = await categoryService.GetAllAsync();
            return Ok(result);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            var result = categoryService.DeleteAsync(id);
            if (!result.Result)
            {
                return NotFound();
            }
            return Ok();
        }
    }
}
