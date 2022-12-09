namespace GraphQLApi.Core.Models.Dto;

public class PersonProperties
{
    public string Height { get; set; }
    public string Mass { get; set; }
    public string Hair_Color { get; set; }
    public string Skin_Color { get; set; }
    public string Eye_Color { get; set; }
    public string Birth_Year { get; set; }
    public string Gender { get; set; }
    public DateTime Created { get; set; }
    public DateTime Edited { get; set; }
    public string Name { get; set; }
    public string Homeworld { get; set; }
    public string Url { get; set; }
}

public class PersonResult
{
    public PersonProperties Properties { get; set; }
    public string Description { get; set; }
    public string _id { get; set; }
    public string Uid { get; set; }
    public int __v { get; set; }
}

public class PersonRoot
{
    public string Message { get; set; }
    public PersonResult Result { get; set; }
}