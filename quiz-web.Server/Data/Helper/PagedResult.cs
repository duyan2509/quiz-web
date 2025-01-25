﻿namespace quiz_web.Server.Data.Helper
{
    public class PagedResult<T>
    {
        public int TotalItems { get; set; } 
        public int PageNumber { get; set; } 
        public int PageSize { get; set; }   
        public List<T> Items { get; set; }  
    }

}
