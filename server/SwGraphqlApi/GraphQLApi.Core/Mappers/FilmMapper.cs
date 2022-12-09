using AutoMapper;
using GraphQLApi.Core.Models;
using GraphQLApi.Core.Models.Dto;

namespace GraphQLApi.Core.Mappers;

public class FilmProfile : Profile
{

        public FilmProfile()
        {
            CreateMap<FilmsRoot, Films>()
                .ForMember(dest => dest.Message, opt => opt.MapFrom(src => src.message))
                .ForMember(dest => dest.Results, opt => opt.MapFrom(src => src.result));


            CreateMap<FilmResult, Film>()
              .ForMember(dest => dest.Uid, opt => opt.MapFrom(src => src.uid))
                .ForMember(dest => dest.Characters, opt => opt.MapFrom(src => src.properties.characters))
                .ForMember(dest => dest.OpeningCrawl, opt => opt.MapFrom(src => src.properties.opening_crawl))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.properties.title));


            CreateMap<FilmRoot, Film>()
                .ForMember(dest => dest.Uid, opt => opt.MapFrom(src => src.result.uid))
                .ForMember(dest => dest.Characters, opt => opt.MapFrom(src => src.result.properties.characters))
                .ForMember(dest => dest.Planets, opt => opt.MapFrom(src => src.result.properties.planets))
                .ForMember(dest => dest.Starships, opt => opt.MapFrom(src => src.result.properties.starships))
                .ForMember(dest => dest.Vehicles, opt => opt.MapFrom(src => src.result.properties.vehicles))
                .ForMember(dest => dest.Species, opt => opt.MapFrom(src => src.result.properties.species))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.result.properties.title))
                .ForMember(dest => dest.EpisodeId, opt => opt.MapFrom(src => src.result.properties.episode_id))
                .ForMember(dest => dest.Director, opt => opt.MapFrom(src => src.result.properties.director))
                .ForMember(dest => dest.ReleaseDate, opt => opt.MapFrom(src => src.result.properties.release_date))
                .ForMember(dest => dest.OpeningCrawl, opt => opt.MapFrom(src => src.result.properties.opening_crawl));

        }
}