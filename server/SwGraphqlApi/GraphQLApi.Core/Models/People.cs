namespace GraphQLApi.Core.Models;

public class People : Base
{
    public string Uid { get; set; }
    
    public string BirthYear { get; set; }
    
    public string EyeColor { get; set; }
    
    public string[] Films { get; set; }
    
    public string Gender { get; set; }
    
    public string Height { get; set; }
    
    public string Homeworld { get; set; }
    
    public string Mass { get; set; }
    
    public string Name { get; set; }
    
    public string SkinColor { get; set; }
    
    public string[] Species { get; set; }
    
    public string[] Starships { get; set; }
    
    public string Url { get; set; }
    
    public string[] Vehicles { get; set; } 
}