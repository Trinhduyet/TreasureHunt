namespace TreasureHuntAPI.Services.Interfaces;
public interface ITreasureHuntService
{
    Task<double> CreateTreasureReturnMinimumFuelAsync(TreasureHuntRequest request, CancellationToken cancellationToken = default);
}
