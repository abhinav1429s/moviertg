using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovRTG.Backend.Models;

[BsonIgnoreExtraElements]
public class Movie
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("title")]
    public required string Title { get; set; }

    [BsonElement("genre")]
    public required string Genre { get; set; }

    [BsonElement("year")]
    public int Year { get; set; }

    [BsonElement("rating")]
    public int Rating { get; set; }

    [BsonElement("poster")]
    public string Poster { get; set; } = string.Empty;

    [BsonElement("description")]
    public string Description { get; set; } = string.Empty;

    [BsonElement("createdAt")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [BsonElement("updatedAt")]
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
