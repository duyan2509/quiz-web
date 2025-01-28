namespace quiz_web.Server.Data.Entity
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Quizz> Quizzes { get; set; }
    }
}
