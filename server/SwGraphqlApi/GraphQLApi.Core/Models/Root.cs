namespace GraphQLApi.Core.Models;

public class Root<T>
{
    public string Message { get; set; }
    public T Result { get; set; }
}