#Type script Config
npm init -y
npm install -D typescript 
npm install -D @types/node->without this lint shows error in ts file  if not type defined
npx tsc --init ->install typescript config
config->ts config outdir:"dist" ,"exclude": ["node_modules", "dist", "coverage"](this files not transpile),
git init
.gitignore file create add-> ["node_modules", "dist", "coverage"]
npx tsc && node $dir$fileNameWithoutExt.js->add in coderunner config or  ts-node -directly run ts without transpile
npm i @aspectj/core@ aspectj/common->Aop
npm install wingston->logger
warning:typescript file inside cannot import another ts file
warning:if use decorator @sample() dont write()


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
using wingston and middleware save every sucess and failue responce
npm install axios->send request to keyclock server
create .env file add port number
npm install dotenv->It get value from env helps
some time server stop after also possible run our backend so if run use taskmanager stop that

create aop folder save aop.ts all middlerwares of project global exception handle when request handleing 
logger folder in aop folder automatically create bu wington if not create configre in wingston  

 #deployment

