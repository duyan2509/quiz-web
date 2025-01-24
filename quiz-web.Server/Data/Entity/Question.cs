namespace quiz_web.Server.Data.Entity
{
    public class Question
    {
        public long Id { get; set; }
        public string Img { get; set; }
        public string Content { get; set; }
        public string Opt1 { get; set; }
        public string Opt2 { get; set; }
        public string Opt3 { get; set; }
        public string Opt4 { get; set; }
        public string Correct { get; set; }
        public long QuizzId { get; set; }
        public long Ordinal { get; set; }

        public Quizz Quizz { get; set; }
        public ICollection<Result> Results { get; set; }
        public AnswerCount AnswerCount { get; set; }
    }
}
