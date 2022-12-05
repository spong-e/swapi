namespace GraphQLApi.Core.Models;

public class RootPeople
{
    public string Message { get; set; }
    public int TotalRecords { get; set; }
    public int TotalPages { get; set; }
    public object Previous { get; set; }
    public string Next { get; set; }
    public List<People> Results { get; set; }
}