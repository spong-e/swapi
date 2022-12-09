namespace GraphQLApi.Core.Models.Dto;

public class PeopleResult
{
    public string uid { get; set; }
    public string name { get; set; }
    public string url { get; set; }
}

public class PeopleRoot
{
    public string message { get; set; }
    public int total_records { get; set; }
    public int total_pages { get; set; }
    public object previous { get; set; }
    public string next { get; set; }
    public List<PeopleResult> results { get; set; }
}