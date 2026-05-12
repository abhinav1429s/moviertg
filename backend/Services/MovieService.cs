using MongoDB.Bson;
using MongoDB.Driver;
using MovRTG.Backend.Models;

namespace MovRTG.Backend.Services;

public class MovieService
{
    private readonly IMongoCollection<Movie> _movies;

    public MovieService(IMongoCollection<Movie> movies)
    {
        _movies = movies;
    }

    public async Task<List<Movie>> GetAllAsync()
    {
        return await _movies.Find(Builders<Movie>.Filter.Empty)
            .SortByDescending(m => m.CreatedAt)
            .ToListAsync();
    }

    public async Task<Movie> CreateAsync(MovieCreateDto request)
    {
        var movie = new Movie
        {
            Title = request.Title,
            Genre = request.Genre,
            Year = request.Year,
            Rating = request.Rating,
            Poster = request.Poster,
            Description = request.Description,
            CreatedAt = DateTime.UtcNow
        };

        await _movies.InsertOneAsync(movie);
        return movie;
    }

    public async Task<Movie?> UpdateRatingAsync(string id, int rating)
    {
        if (!ObjectId.TryParse(id, out var objectId))
        {
            return null;
        }

        var update = Builders<Movie>.Update.Set(m => m.Rating, rating);
        return await _movies.FindOneAndUpdateAsync<Movie>(
            m => m.Id == id,
            update,
            new FindOneAndUpdateOptions<Movie>
            {
                ReturnDocument = ReturnDocument.After
            });
    }

    public async Task<bool> DeleteAsync(string id)
    {
        if (!ObjectId.TryParse(id, out var objectId))
        {
            return false;
        }

        var result = await _movies.DeleteOneAsync(m => m.Id == id);
        return result.DeletedCount > 0;
    }
}
