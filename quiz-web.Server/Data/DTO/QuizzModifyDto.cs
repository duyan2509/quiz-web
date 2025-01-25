namespace quiz_web.Server.Data.DTO
{
    public class QuizzModifyDto
    {
        public long Id { get; set; }
        public long Price { get; set; }
        public string Title { get; set; }
        public TimeSpan Duration { get; set; }
        public long CategoryId { get; set; }
        public string Notes { get; set; }
        public long QuestionCounts { get; set; }
    }
}
