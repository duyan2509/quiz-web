using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Data.DTO
{
    public class AttemptDto
    {
        public long Id { get; set; }
        public DateTime AttemptAt { get; set; }
        public string Score { get; set; }
        public TimeSpan Taken { get; set; }

        public String QuizzName { get; set; }
        public String UserName { get; set; }

    }
}
