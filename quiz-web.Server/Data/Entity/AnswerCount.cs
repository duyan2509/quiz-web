namespace quiz_web.Server.Data.Entity
{
    public class AnswerCount
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public int CntOpt1 { get; set; }
        public int CntOpt2 { get; set; }
        public int CntOpt3 { get; set; }
        public int CntOpt4 { get; set; }

        public Question Question { get; set; }
    }
}
