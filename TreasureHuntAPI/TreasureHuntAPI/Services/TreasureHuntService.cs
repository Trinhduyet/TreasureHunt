namespace TreasureHuntAPI.Services
{
    public class TreasureHuntService(TreasureDbContext context) : ITreasureHuntService
    {
        public async Task<double> CreateTreasureReturnMinimumFuelAsync(TreasureHuntRequest request, CancellationToken cancellationToken = default)
        {
            var treasureMap = new TreasureMap
            {
                Id = Guid.NewGuid(),
                Row = request.Row,
                Column = request.Column,
                ChestNumber = request.ChestNumber,
                Matrix = request.Matrix
            };
            await context.TreasureMaps.AddAsync(treasureMap, cancellationToken);
            await context.SaveChangesAsync(cancellationToken);
            var a = context.TreasureMaps.ToList();
            // Calculate the minimum fuel amount
            double minFuel = TreasureMapSolverHelper.CalculateMinimumFuel(request.Row, request.Column, request.ChestNumber, request.Matrix);
            return minFuel;
        }
    }
}
