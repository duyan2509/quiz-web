using quiz_web.Server.Data.DTO;
using quiz_web.Server.Data.Entity;
using quiz_web.Server.Data.Helper;

namespace quiz_web.Server.Service.IService
{
    public interface IPurchaseService
    {
        public Task<PurchaseDto> CreateAsync(PurchaseDto purchase);
        /// <summary>
        /// purchase history for customer
        /// </summary>
        /// <param name="index"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        public Task<PagedResult<PurchaseDto>> GetAllByCustomerIdAsync(int index=1, int size=10);
        /// <summary>
        /// get all for admin
        /// </summary>
        /// <param name="time"></param>
        /// <param name="index"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        public Task<PagedResult<PurchaseDto>> GetAllForAdminAsync(DateTime time,int index = 1, int size = 10); 
        /// <summary>
        /// get all for auhtor (select author=userid)
        /// </summary>
        /// <param name="time"></param>
        /// <param name="index"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        public Task<PagedResult<PurchaseDto>> GetAllForAuthorAsync(DateTime time,int index = 1, int size = 10); 

    }
}
