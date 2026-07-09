#Type script Config
npm init -y
npm install -D typescript 
npm install -D @types/node->without this lint shows error in ts file  if not type defined
npx tsc --init ->install typescript config
config->ts config outdir:"dist" ,"exclude": ["node_modules", "dist", "coverage"](this files not transpile),
git init
.gitignore file create add-> ["node_modules", "dist", "coverage"]
npx tsc && node $dir$fileNameWithoutExt.js->add in coderunner config or  ts-node -directly run ts without transpile
warning:typescript file inside cannot import another ts file

#express 
create app.ts ->enter file
npm install express->express instaltization
npm install -save-dev @types/express->add type expess
ECMAScript->change package.json type:"module"
npm install nodemon->Made changes without stop server
 "server": "nodemon --watch . --ignore dist --ext ts --exec \"npx tsc && node dist/app.js\""->package.json
 ->nodemon run on ts files also
 create nodemon.json file
{
  "watch": ["**/*.ts"],
  "ext": "ts",
  "ignore": ["node_modules", "coverage","dist"],
  "exec": "npx tsc && node dist/app.js"
}
npx nodemon->run with nodemon ts
 npm install morgan->logging the hole express requires
npm install axios->send request to keyclock server
npm install dotenv->It get value from env helps
 
 #deployment

