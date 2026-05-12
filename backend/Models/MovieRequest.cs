using System.ComponentModel.DataAnnotations;

namespace MovRTG.Backend.Models;

public class MovieCreateDto
{
    [Required]
    public required string Title { get; set; }

    [Required]
    public required string Genre { get; set; }

    [Required]
    public int Year { get; set; }

    [Required]
    [Range(1, 5)]
    public int Rating { get; set; }

    public string Poster { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class RatingUpdateDto
{
    [Required]
    [Range(1, 5)]
    public int Rating { get; set; }
}
