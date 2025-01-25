using System.ComponentModel.DataAnnotations;

namespace quiz_web.Server.Data.DTO
{
    public class CreateQuestionDto
    {
        [Required(ErrorMessage = "Content is required.")]
        public string Content { get; set; }

        [Required(ErrorMessage = "Option 1 is required.")]
        public string Opt1 { get; set; }

        [Required(ErrorMessage = "Option 2 is required.")]
        public string Opt2 { get; set; }

        [Required(ErrorMessage = "Option 3 is required.")]
        public string Opt3 { get; set; }

        [Required(ErrorMessage = "Option 4 is required.")]
        public string Opt4 { get; set; }

        [Required(ErrorMessage = "Correct answer is required.")]
        public string Correct { get; set; }

        [Required(ErrorMessage = "Quizz ID is required.")]
        public long QuizzId { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Ordinal must be greater than 0.")]
        public long Ordinal { get; set; }

        public string Img { get; set; }
    }
}
