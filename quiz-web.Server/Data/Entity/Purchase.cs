﻿namespace quiz_web.Server.Data.Entity
{
    public class Purchase
    {
        public long Id { get; set; }
        public long QuizzId { get; set; }
        public string UserId { get; set; }
        public long Price { get; set; }
        public DateTime PurchaseAt { get; set; }

        public Quizz Quizz { get; set; }
        public ApplicationUser User { get; set; }

    }
}
