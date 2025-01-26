namespace quiz_web.Server.Data.DTO
{
    public class ResultDto
    {
        public long Id { get; set; }
        public long AttemptId { get; set; }
        public long QuestionId { get; set; }
        public string SelectedOption { get; set; }
        public string Opt1 { get; set; }
        public string Opt2 { get; set; }
        public string Opt3 { get; set; }
        public string Opt4 { get; set; }
        public string Correct { get; set; }
        public long Ordinal { get; set; }
    }
}
