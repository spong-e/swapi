using System.Text.Json;
using AutoMapper;
using GraphQLApi.Core.Models;
using GraphQLApi.Core.Models.Dto;

namespace GraphQLApi.Core.Services;

public class SwapiClient : ISwapiClient
{
    
    private readonly HttpClient _httpClient;
    private readonly JsonSerializerOptions _options;
    private readonly IMapper _mapper; 
    
    public SwapiClient(IMapper mapper)
    {
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        _httpClient = new();
        _httpClient.BaseAddress = new Uri("https://swapi.tech/api/");
        _httpClient.Timeout = new TimeSpan(0, 0, 5);
        
        _options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
    }

    
    public async Task<People?> GetPeople(int page)
    {
        var response = await _httpClient.GetAsync($"people?page={page}&limit=10");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var root = JsonSerializer.Deserialize<PeopleRoot>(content, _options);

        return root != null ? _mapper.Map<PeopleRoot, People>(root) : null;
    }
    
    public async Task<Person?> GetPerson(int id)
    {
        var response = await _httpClient.GetAsync($"people/{id}");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var root = JsonSerializer.Deserialize<PersonRoot>(content, _options);

        return root != null ? _mapper.Map<PersonRoot, Person>(root) : null;
    }

    public async Task<Films?> GetFilms()
    {
        var response = await _httpClient.GetAsync("films");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var root = JsonSerializer.Deserialize<FilmsRoot>(content, _options);

        return root != null ? _mapper.Map<FilmsRoot, Films>(root) : null;
    }

    public async Task<Film?> GetFilm(int id)
    {
        var response = await _httpClient.GetAsync($"films/{id}");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var root = JsonSerializer.Deserialize<FilmRoot>(content, _options);

        return root != null ? _mapper.Map<FilmRoot, Film>(root) : null;
    }
}