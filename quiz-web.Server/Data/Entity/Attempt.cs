namespace quiz_web.Server.Data.Entity
{
    public class Attempt
    {
        public int Id { get; set; }
        public int QuizzId { get; set; }
        public string UserId { get; set; }
        public DateTime AttemptAt { get; set; }
        public string Score { get; set; }
        public TimeSpan Taken { get; set; }

        public Quizz Quizz { get; set; }
        public ApplicationUser User { get; set; }
        public ICollection<Result> Results { get; set; }
    }
}
