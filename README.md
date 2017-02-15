# ngx-library-starter
Angular >2 library starter with
- AOT compilation.
- Support for external templates and SCSS files.
- Rollup bundling

## Usage
- Replace all "ngx-library-starter" with "your-library-name".
- Rename "LibModule" to "YourLibraryNameModule"

and then 
```ts
npm i
npm run build
```

## How to work with Demo
Demo project references the library from parent directory.

When you have changes to the library you still have to remove the library files and install again simply by

```bash
cd demo
rm -R node_modules/your-library-name
npm i
```

## How to make Demo working

```ts
cd demo
npm i
npm start
```

Navigate to the http://localhost:3040

## To publish your npm module
Finally
```
npm login
npm publish
```

## TODO
- [X] AOT compilation
- [X] Rollup bundling
- [X] Minify / Uglify
- [X] Demo project
- [X] Bundle component SASS files
- [X] Bundle component templates
- [ ] Bundle styleUrls with multiple styles 
- [ ] Bundle global styles
- [ ] CLI/Generator e.g. yo?
