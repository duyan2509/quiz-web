using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using quiz_web.Server.Data.Entity;

namespace quiz_web.Server.Data
{
    public class QDbContext: IdentityDbContext<ApplicationUser>
    {
        public QDbContext(DbContextOptions<QDbContext> opt) : base(opt) { }
        #region
        DbSet<AnswerCount> Answers { get; set; }
        DbSet<Attempt> Attempts { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<PaymentCard> PaymentCards { get; set; }
        DbSet<Purchase> Purchase { get; set; }
        DbSet<Question> Questions { get; set; }
        DbSet<Quizz> Quizzs { get; set; }
        DbSet<Result> Results { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Quizz entity
            modelBuilder.Entity<Quizz>()
                .HasKey(q => q.Id);

            modelBuilder.Entity<Quizz>()
                .HasOne(q => q.Category)
                .WithMany(c => c.Quizzes)
                .HasForeignKey(q => q.CategoryId);
            modelBuilder.Entity<Quizz>()
                    .HasOne(q => q.Author)
                    .WithMany(u => u.AuthoredQuizzes)
                    .HasForeignKey(q => q.AuthorId)
                    .HasPrincipalKey(u => u.Id);
            // Question entity
            modelBuilder.Entity<Question>()
                .HasKey(q => q.Id);

            modelBuilder.Entity<Question>()
                .HasOne(q => q.Quizz)
                .WithMany(qz => qz.Questions)
                .HasForeignKey(q => q.QuizzId);

            // Purchase entity
            modelBuilder.Entity<Purchase>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Purchase>()
                .HasOne(p => p.Quizz)
                .WithMany(q => q.Purchases)
                .HasForeignKey(p => p.QuizzId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Purchase>()
                .HasOne(p => p.User)
                .WithMany(u => u.Purchases)
                .HasForeignKey(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Attempt entity
            modelBuilder.Entity<Attempt>()
                .HasKey(a => a.Id);

            modelBuilder.Entity<Attempt>()
                .HasOne(a => a.Quizz)
                .WithMany(q => q.Attempts)
                .HasForeignKey(a => a.QuizzId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Attempt>()
                .HasOne(a => a.User)
                .WithMany(u => u.Attempts)
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Result entity
            modelBuilder.Entity<Result>()
                .HasKey(r => r.Id);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.Attempt)
                .WithMany(a => a.Results)
                .HasForeignKey(r => r.AttemptId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.Question)
                .WithMany(q => q.Results)
                .HasForeignKey(r => r.QuestionId)
                .OnDelete(DeleteBehavior.NoAction);

            // Category entity
            modelBuilder.Entity<Category>()
                .HasKey(c => c.Id);

            // PaymentCard entity
            modelBuilder.Entity<PaymentCard>()
                .HasKey(pc => pc.Id);

            // User entity
            modelBuilder.Entity<ApplicationUser>()
                .HasKey(u => u.Id);

            modelBuilder.Entity<ApplicationUser>()
                .HasOne(u => u.PaymentCard)
                .WithMany()
                .HasForeignKey(u => u.PaymentId);

            // AnswerCount entity
            modelBuilder.Entity<AnswerCount>()
                .HasKey(ac => ac.Id);

            modelBuilder.Entity<AnswerCount>()
                .HasOne(ac => ac.Question)
                .WithOne(q => q.AnswerCount)
                .HasForeignKey<AnswerCount>(ac => ac.QuestionId);
        }
    }
}
