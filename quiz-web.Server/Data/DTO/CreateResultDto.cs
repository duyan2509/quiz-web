namespace quiz_web.Server.Data.DTO
{
    public class CreateResultDto
    {
        public long QuestionId { get; set; }
        public string SelectedOption { get; set; }
    }
}
