namespace quiz_web.Server.Data.DTO
{
    public class QuizzCreateDto
    {
        public long Price { get; set; }
        public string Title { get; set; }
        public TimeSpan Duration { get; set; }
        public int CategoryId { get; set; }
        public string Notes { get; set; }
        public string AuthorId { get; set; }
        public ICollection<CreateQuestionDto>? Questions { get; set; }
    }
}
