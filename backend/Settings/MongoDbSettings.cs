namespace MovRTG.Backend.Settings;

public class MongoDbSettings
{
    public string ConnectionString { get; set; } = string.Empty;
    public string DatabaseName { get; set; } = string.Empty;
    public string MoviesCollection { get; set; } = string.Empty;
}
