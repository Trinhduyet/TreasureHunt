namespace TreasureHuntAPI.DTOs;
public class TreasureHuntRequest
{
    public int Row { get; set; }
    public int Column { get; set; }
    public int ChestNumber { get; set; }
    public required List<List<int>> Matrix { get; set; }
}