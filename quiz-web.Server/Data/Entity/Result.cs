﻿namespace quiz_web.Server.Data.Entity
{
    public class Result
    {
        public int Id { get; set; }
        public int AttemptId { get; set; }
        public int QuestionId { get; set; }
        public string SelectedOption { get; set; }

        public Attempt Attempt { get; set; }
        public Question Question { get; set; }

    }
}
