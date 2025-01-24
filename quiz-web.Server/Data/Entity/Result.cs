namespace quiz_web.Server.Data.Entity
{
    public class Result
    {
        public long Id { get; set; }
        public long AttemptId { get; set; }
        public long QuestionId { get; set; }
        public long SelectedOption { get; set; }

        public Attempt Attempt { get; set; }
        public Question Question { get; set; }

    }
}
