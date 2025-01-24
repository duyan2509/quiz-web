using Microsoft.AspNetCore.Identity;

namespace quiz_web.Server.Data.Entity
{
    public class ApplicationUser:IdentityUser
    {
        public string Url { get; set; } = null!;
    }
}
