namespace quiz_web.Server.Data.Entity
{
    public class Question
    {
        public int Id { get; set; }
        public string Img { get; set; }
        public string Content { get; set; }
        public string Opt1 { get; set; }
        public string Opt2 { get; set; }
        public string Opt3 { get; set; }
        public string Opt4 { get; set; }
        public string Correct { get; set; }
        public int QuizzId { get; set; }
        public int Ordinal { get; set; }

        public Quizz Quizz { get; set; }
        public ICollection<Result> Results { get; set; }
        public AnswerCount AnswerCount { get; set; }
    }
}
