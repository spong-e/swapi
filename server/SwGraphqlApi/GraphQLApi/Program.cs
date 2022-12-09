using GraphQLApi.Core.Mappers;
using GraphQLApi.Core.Query;
using GraphQLApi.Core.Resolvers;
using GraphQLApi.Core.Services;
using GraphQLApi.Core.Types;
using Microsoft.AspNetCore.Cors.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<ISwapiClient, SwapiClient>();

 builder.Services.AddScoped<IPeopleResolver, PeopleResolver>();

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddTypeExtension<FilmQuery>()
    .AddTypeExtension<PeopleQuery>()
     .AddType<PersonType>();

builder.Services.AddCors(options => options.AddPolicy("Allow", policy =>
{
    policy.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
}));




builder.Services.AddAutoMapper(typeof(BaseMapper).Assembly);

var app = builder.Build();

app.UseCors("Allow");
app.MapGraphQL();

app.Run();
