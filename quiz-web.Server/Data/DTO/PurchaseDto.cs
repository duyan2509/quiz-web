using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Data.DTO
{
    public class PurchaseDto
    {
        public long Id { get; set; }
        public long QuizzId { get; set; } 
        public string QuizzTitle { get; set; }
        public string UserId { get; set; }
        public long Price { get; set; }
        public DateTime PurchaseAt { get; set; }

    }
}
