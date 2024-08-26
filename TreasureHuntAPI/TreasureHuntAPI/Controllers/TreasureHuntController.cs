namespace TreasureHuntAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TreasureHuntController(ITreasureHuntService treasureHuntService) : ControllerBase
{

    [HttpPost]
    public async Task<IActionResult> CreateTreasureAsync([FromBody] TreasureHuntRequest request, CancellationToken cancellationToken = default)
    {
        double minFuel = await treasureHuntService.CreateTreasureReturnMinimumFuelAsync(request, cancellationToken);

        return Ok(new { MinFuel = minFuel });
    }
}