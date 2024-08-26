namespace TreasureHuntAPI.Models;
public class TreasureMap
{
    public Guid Id { get; set; }
    public int Row { get; set; }
    public int Column { get; set; }
    public int ChestNumber { get; set; }
    public required List<List<int>> Matrix { get; set; }
}