namespace TreasureHuntAPI.Ultils;
public class TreasureMapSolverHelper
{
    // Class representing the current state in BFS
    private class State
    {
        public int X { get; }
        public int Y { get; }
        public int Keys { get; }
        public double Fuel { get; }

        public State(int x, int y, int keys, double fuel)
        {
            X = x;
            Y = y;
            Keys = keys;
            Fuel = fuel;
        }
    }

    // Function to calculate the minimum fuel required to collect all keys
    public static double CalculateMinimumFuel(int row, int column, int chestNumber, List<List<int>> matrix)
    {
        var newMatrix = ConvertToArray(matrix);
        var directions = new (int, int)[]
        {
            (0, 1), (1, 0), (0, -1), (-1, 0) // Directions: right, down, left, up
        };

        // Visited states
        var visited = new HashSet<(int x, int y, int keys)>();

        // BFS queue
        var queue = new Queue<State>();
        queue.Enqueue(new State(0, 0, 0, 0.0));
        visited.Add((0, 0, 0));

        while (queue.Count > 0)
        {
            var current = queue.Dequeue();
            int x = current.X;
            int y = current.Y;
            int keys = current.Keys;
            double fuel = current.Fuel;

            // Check if all keys have been collected
            if (keys == (1 << chestNumber) - 1) // 2^p - 1
            {
                return fuel; // Return fuel when all keys are collected
            }

            // Expand BFS to adjacent cells
            foreach (var (dx, dy) in directions)
            {
                int newX = x + dx;
                int newY = y + dy;

                if (newX >= 0 && newY >= 0 && newX < row && newY < column)
                {
                    int cell = newMatrix[newX, newY];
                    int newKeys = keys;

                    // If this cell has a key
                    if (cell > 0)
                    {
                        newKeys |= (1 << (cell - 1));
                    }

                    double distance = Math.Sqrt(dx * dx + dy * dy);
                    double newFuel = fuel + distance;

                    // If this state hasn't been visited, add it to the queue
                    if (!visited.Contains((newX, newY, newKeys)))
                    {
                        visited.Add((newX, newY, newKeys));
                        queue.Enqueue(new State(newX, newY, newKeys, newFuel));
                    }
                }
            }
        }

        // If no path is found, return -1
        return -1.0;
    }

    private static int[,] ConvertToArray(List<List<int>> list)
    {
        int rows = list.Count;
        int cols = list[0].Count;
        var matrix = new int[rows, cols];

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                matrix[i, j] = list[i][j];
            }
        }

        return matrix;
    }
}

