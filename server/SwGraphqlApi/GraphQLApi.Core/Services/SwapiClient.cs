using System.Text.Json;
using GraphQLApi.Core.Models;

namespace GraphQLApi.Core.Services;

public class SwapiClient : ISwapiClient
{
    
    private static readonly HttpClient _httpClient = new HttpClient();
    private readonly JsonSerializerOptions _options; 
    
    public SwapiClient()
    {
        _httpClient.BaseAddress = new Uri("https://swapi.tech/api/");
        _httpClient.Timeout = new TimeSpan(0, 0, 5);
        
        _options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
    }

    
    public async Task<List<People>?> GetPeople(int page)
    {
        var response = await _httpClient.GetAsync($"people?page={page}&limit=10");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var root = JsonSerializer.Deserialize<RootPeople>(content, _options);

        return root.Results;
    }
    public async Task<Resources?> GetResources()
    {
        var response = await _httpClient.GetAsync("");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var root = JsonSerializer.Deserialize<Root<Resources>>(content, _options);

        return root.Result;
    }
}