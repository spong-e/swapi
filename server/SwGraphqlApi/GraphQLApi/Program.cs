using GraphQLApi.Core.Query;
using GraphQLApi.Core.Services;

var builder = WebApplication.CreateBuilder(args);


builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddTypeExtension<ResourcesQuery>()
    .AddTypeExtension<PeopleQuery>();

builder.Services.AddScoped<ISwapiClient, SwapiClient>();

var app = builder.Build();

app.MapGraphQL();

app.Run();
