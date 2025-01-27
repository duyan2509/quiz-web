namespace quiz_web.Server.Data.DTO
{
    public class CreateAttemptDto
    {
        public long QuizzId { get; set; }
        public TimeSpan Taken { get; set; }
        public List<CreateResultDto> createResultDtos { get; set; }
    }
}
