using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Data.DTO
{
    public class QuestionDto
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
        public long CntOpt1 { get; set; }
        public long CntOpt2 { get; set; }
        public long CntOpt3 { get; set; }
        public long CntOpt4 { get; set; }
    }
}
