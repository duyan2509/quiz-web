namespace quiz_web.Server.Data.Entity
{
    public class Quizz
    {
        public int Id { get; set; }
        public long Price { get; set; }
        public string Title { get; set; }
        public TimeSpan Duration { get; set; }
        public int CategoryId { get; set; }
        public string Notes { get; set; }
        public int QuestionCounts { get; set; }
        public int AttemptCounts { get; set; }
        public string AuthorId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Category Category { get; set; }
        public ApplicationUser Author { get; set; }
        public ICollection<Question>? Questions { get; set; }
        public ICollection<Attempt>? Attempts { get; set; }
        public ICollection<Purchase> Purchases { get; set; }
    }
}
