using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Data
{
    public class QDbContext: IdentityDbContext<ApplicationUser>
    {
        public QDbContext(DbContextOptions<QDbContext> opt) : base(opt) { }
        #region
        #endregion
    }
}
