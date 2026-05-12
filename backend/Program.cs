using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MovRTG.Backend.Models;
using MovRTG.Backend.Services;
using MovRTG.Backend.Settings;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection(nameof(MongoDbSettings)));
builder.Services.AddSingleton(sp =>
{
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    return new MongoClient(settings.ConnectionString);
});
builder.Services.AddSingleton(sp =>
{
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    var client = sp.GetRequiredService<MongoClient>();
    var database = client.GetDatabase(settings.DatabaseName);
    return database.GetCollection<Movie>(settings.MoviesCollection);
});
builder.Services.AddSingleton<MovieService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin", policy =>
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAnyOrigin");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/api/movies", async (MovieService movieService) =>
    await movieService.GetAllAsync());

app.MapPost("/api/movies", async (MovieService movieService, MovieCreateDto request) =>
{
    var movie = await movieService.CreateAsync(request);
    return Results.Created($"/api/movies/{movie.Id}", movie);
});

app.MapPut("/api/movies/{id}/rating", async (string id, RatingUpdateDto request, MovieService movieService) =>
{
    var updated = await movieService.UpdateRatingAsync(id, request.Rating);
    return updated is null ? Results.NotFound() : Results.Ok(updated);
});

app.MapDelete("/api/movies/{id}", async (string id, MovieService movieService) =>
{
    var deleted = await movieService.DeleteAsync(id);
    return deleted ? Results.Ok(new { message = "Movie deleted" }) : Results.NotFound();
});

app.Run();
