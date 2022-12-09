namespace GraphQLApi.Core.Models.Dto
{
    public class FilmProperties
    {
        public List<string> characters { get; set; }
        public List<string> planets { get; set; }
        public List<string> starships { get; set; }
        public List<string> vehicles { get; set; }
        public List<string> species { get; set; }
        public DateTime created { get; set; }
        public DateTime edited { get; set; }
        public string producer { get; set; }
        public string title { get; set; }
        public int episode_id { get; set; }
        public string director { get; set; }
        public string release_date { get; set; }
        public string opening_crawl { get; set; }
        public string url { get; set; }
    }

    public class FilmResult
    {
        public FilmProperties properties { get; set; }
        public string description { get; set; }
        public string _id { get; set; }
        public string uid { get; set; }
        public int __v { get; set; }
    }

    public class FilmRoot
    {
        public string message { get; set; }
        public FilmResult result { get; set; }
    }

    public class FilmsRoot
    {
        public string message { get; set; }
        public List<FilmResult> result { get; set; }
    }
}