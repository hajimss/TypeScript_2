# TypeScript Journey

### Creating and setting ts configurations

```
tsc --init
```

creates `tsconfig.json` with default settings.
`tsconfig.json` files configures how the compiler behaves.
exclude array in `tsconfig.json` will be ignored by compiler.
include array contain names of files we want to compile.

```
tsc
```

compiles all typescipt file

use `--watch` flag to watch ALL ts files

read more about the other configs on the descriptions stated on the right side of the config file.

Source Maps config will help to create map files which will help a lot in debugging.

use rootDir and outDir to organise which folder contains the ts files and where it should be stored.

### Type Checking

By default, all configs are set to true.
Set the specific configs to false.
