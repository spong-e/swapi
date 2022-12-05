namespace GraphQLApi.Core.Models;

public class ResourceRoot<T>
{
    public T Properties { get; set; }
    public string Description { get; set; }
    public string Id { get; set; }
    public string Uid { get; set; }
    public int V { get; set; }
}