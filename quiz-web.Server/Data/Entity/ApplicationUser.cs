using Microsoft.AspNetCore.Identity;

namespace quiz_web.Server.Data.Entity
{
    public class ApplicationUser:IdentityUser
    {
        public string Url { get; set; } = null!;
        public string Name { get; set; }
        public long PaymentId { get; set; }

        public PaymentCard PaymentCard { get; set; }
        public ICollection<Purchase> Purchases { get; set; }
        public ICollection<Attempt> Attempts { get; set; }
        public ICollection<Quizz> AuthoredQuizzes { get; set; }
    }
}
