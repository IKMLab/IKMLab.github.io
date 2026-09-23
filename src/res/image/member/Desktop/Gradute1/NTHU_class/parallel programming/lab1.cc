#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef unsigned long long ull;

// smallest y such that x*x + y*y >= r*r, computed exactly
static ull start_y(ull r2, ull x) {
    ull remain = r2 - x * x;
    ull y = (ull)ceill(sqrtl((double)remain));
    while (y * y < remain) y++;
    while (y > 0 && (y - 1) * (y - 1) >= remain) y--;
    return y;
}

int main(int argc, char** argv) {
    if (argc != 3) { fprintf(stderr, "must provide exactly 2 arguments!\n"); return 1; }

    MPI_Init(&argc, &argv);
    int size, rank;
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    ull r = atoll(argv[1]), k = atoll(argv[2]);
    ull r2 = r * r;

    ull start = r * rank / size;
    ull end = r * (rank + 1) / size;

    ull local = 0;
    if (start < end) {
        ull y = start_y(r2, start);
        for (ull x = start; x < end; x++) {
            ull remain = r2 - x * x;
            while (y > 0 && (y - 1) * (y - 1) >= remain) y--;
            local += y;
        }
    }
    local %= k;

    ull total = 0;
    MPI_Reduce(&local, &total, 1, MPI_UNSIGNED_LONG_LONG, MPI_SUM, 0, MPI_COMM_WORLD);

    if (rank == 0) printf("%llu\n", (4 * (total % k)) % k);

    MPI_Finalize();
    return 0;
}