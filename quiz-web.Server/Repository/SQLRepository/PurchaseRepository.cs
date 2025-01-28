using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;
using quiz_web.Server.Repository.IRepository;

namespace quiz_web.Server.Repository.SQLRepository
{
    public class PurchaseRepository : IPurchaseRepository
    {
        public Task<Purchase> CreateAsync(Purchase purchase)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<Purchase>> GetAllByCustomerIdAsync(int customerId, int index = 1, int size = 10)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<Purchase>> GetAllForAdminAsync(DateTime time, int index = 1, int size = 10)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<Purchase>> GetAllForAuthorAsync(DateTime time, int authorId, int index = 1, int size = 10)
        {
            throw new NotImplementedException();
        }
    }
}
