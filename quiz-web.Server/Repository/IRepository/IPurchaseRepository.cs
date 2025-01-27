using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;

namespace quiz_web.Server.Repository.IRepository
{
    public interface IPurchaseRepository
    {
        Task<Purchase> CreateAsync(Purchase purchase);
        Task<PagedResult<Purchase>> GetAllByCustomerIdAsync(int customerId, int index = 1, int size = 10);
        Task<PagedResult<Purchase>> GetAllForAdminAsync(DateTime time, int index = 1, int size = 10);
        Task<PagedResult<Purchase>> GetAllForAuthorAsync(DateTime time, int authorId, int index = 1, int size = 10);
    }
}
