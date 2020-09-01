with import <nixpkgs> {};
let prisma = callPackage ./prisma-bin.nix {};
in mkShell {
    buildInputs = [
        nodejs-14_x
        prisma
    ];
    shellHook = ''
        export PRISMA_MIGRATION_ENGINE_BINARY="${prisma}/bin/migration-engine"
        export PRISMA_QUERY_ENGINE_BINARY="${prisma}/bin/query-engine"
        export PRISMA_INTROSPECTION_ENGINE_BINARY="${prisma}/bin/introspection-engine"
        export PRISMA_FMT_BINARY="${prisma}/bin/prisma-fmt"
    '';
}
