using quiz_web.Server.Repository.IRepository;
using quiz_web.Server.Repository.SQLRepository;
using quiz_web.Server.Service.IService;
using quiz_web.Server.Service;
using quiz_web.Server.Service.Service;

namespace quiz_web.Server
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IQuizzService, QuizzService>();
            services.AddScoped<IQuizzRepository, QuizzRepository>();
            services.AddScoped<IQuestionService, QuestionService>();
            services.AddScoped<IQuestionRepository, QuestionRepository>();
            return services;
        }
    }
}
