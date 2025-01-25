using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Data.DTO
{
    public class QuizzDetailDto
    {
        public long Id { get; set; }
        public long Price { get; set; }
        public string Title { get; set; }
        public string Notes { get; set; }

        public TimeSpan Duration { get; set; }
        public long AttemptCounts { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public bool IsPurchased { get; set; }
        public string AuthorName { get; set; }
        public string AuthorUrl { get; set; } = string.Empty;
        public string CategoryName { get; set; }
    }
}
