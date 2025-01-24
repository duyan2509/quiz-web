namespace quiz_web.Server.Data.Entity
{
    public class AnswerCount
    {
        public long Id { get; set; }
        public long QuestionId { get; set; }
        public long CntOpt1 { get; set; }
        public long CntOpt2 { get; set; }
        public long CntOpt3 { get; set; }
        public long CntOpt4 { get; set; }

        public Question Question { get; set; }
    }
}
