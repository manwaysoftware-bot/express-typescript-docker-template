#Type script Config
npm init -y
npm install -D typescript 
npm install -D @types/node->without this lint shows error in ts file  if not type defined
npx tsc --init ->install typescript config
config->ts config outdir:"dist" ,"exclude": ["node_modules", "dist", "coverage"](this files not transpile),
git init
.gitignore file create add-> ["node_modules", "dist", "coverage"]
 package json->npx tsc ;node dist/sample.js like commant create shour cut .is helps run eassily
 but using here remove ; use && like bellow
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "ragul" "npx tsc &&node dist/sample.js"->run using npm run ragul 
  }
npx tsc && node $dir$fileNameWithoutExt.js->add in coderunner config or  ts-node -directly run ts without transpile
npm i @aspectj/core@ aspectj/common->Aop
npm install wingston->logger
warning:typescript file inside cannot import another ts file
warning:if use decorator @sample() dont write()
create utils folder and utils.ts file create
create higher oreder function using created tested function or not check in utils.ts file
always here can use export keyword remove automatically that program stop .but this give compile error so that function used function test false autmatically blocke tested function


#express 
npm install express->express instaltization
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

