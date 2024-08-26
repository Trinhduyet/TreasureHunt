using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using TreasureHuntAPI.DTOs;

namespace TreasureHuntAPI.Models
{
    public class TreasureDbContext : DbContext
    {
        public DbSet<TreasureMap> TreasureMaps { get; set; }

        public TreasureDbContext(DbContextOptions<TreasureDbContext> options)
            : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TreasureMap>()
                .Property(e => e.Matrix)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                    v => JsonSerializer.Deserialize<List<List<int>>>(v, (JsonSerializerOptions)null));
        }
    }
}

