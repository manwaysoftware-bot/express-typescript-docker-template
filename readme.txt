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
npx tsx {filName.ts}->ts command tools file direct run  
npx tsc && node $dir$fileNameWithoutExt.js->add in coderunner config or  ts-node -directly run ts without transpile
npm i @aspectj/core@ aspectj/common->Aop
npm install wingston->logger
add port,enviroment,developerName,servicename,version
warning:typescript file inside cannot import another ts file
warning:if use decorator @sample() dont write()
create utils folder and utils.ts file create
create higher oreder function using created tested function or not check in utils.ts file
always here can use export keyword remove automatically that program stop .but this give compile error so that function used function test false autmatically blocke tested function
installed ramda libary ->npm install ramda
installed ramda libary type defintion->npm install --save-dev @types/ramda
sepratly in util file create backed section connect frontend


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
 #Warnning:before run docker file your typercript project must be compile or docker RUN npx tsc 
  docker command all FROM COPY RUN should be captial letter and also connct internet
  #Warning:some dependency package json like not attched .so exclity add in docker file install.other wise container run error.
  
  1.docker all run container use only local envirmentenal run only.same docker image same source and same account
using differnt computer is act like different application run.like andriod app install your mobile standlonly work on 
your application
  2.you want that image to hole team.crate docker image using  docker file .and push image resitory(Amazon,Google,Docker hub)
  
  3.kubernates is not service provider.open source container Orchestration.is used is mange mutiply container in deployment.
    a.create kubernates cluser->cluster 
  4.pass the arugs       
  args:
        - developerName=new-0017 
  5.give image name also serviceName container c serviceName:version also this version metion in dot env
  service change dotenv is label purpose only.you always metion in docker composer
   demo:->service name
    #Warning:docker image file any change made you should change image version other vice not create image and container
    3warning:docker optional flags→this optinal only gives before imagename/imagName
    build: 
      context: .
      #args give specially like ${developerName} env variable for .env
      args:
        - developerName=${developerName}
    #this provide docker file builded image name.
    #without build command use this automatically search image name on local the docker hub.if not avaiable gives error
    image: "demo-ragul:2.0.0"
    container_name: "ragul"
    ports:
      - "3000:3000"->$port:$port 
    note:docker compose image cannot change when using image name
   5.ARG port=1000 default value also internal port number be there best reason without using docker compose run if give another port number metain used that         
   6.docker volume create {volname/hostVolume}
   -v flag also optinal flag so give before imagename or id
    containerpath->this path not a computer directery path .is container path.is created by workdir command
   example: docker run -p 1000:1000 -v sample:/app/aop/logger {imageName/imagimageid}
    a.docker file join->during run command use-> docker run -v {volname/hostVolume}:{containerpath} {imageName/imageId}->example docker run -v ./aop/logger:sample {imageName/imageId}
    b.docker compuse use create volume
    #creating volumes but volume name any use in service only creared 
    volumes:
      #vol_name
      sample:
    centerl:
    volumes:
        #create into project folderName+app like metains
      - sample:/app/aop/logger 
      like metain  
   7.Bind mount 
      //when bindMount local node_modules folder override container node_modules when container run
      //so using -v {workdir/node_modules} this volume isolate the contner node module to local volume
      //container run any folder created it when bind .it automaically reflectd local.
      //Is not only docker any thing
      //without this overide nodemoules container use this.so differnt env produce differn error.
      //if delete nodmoules folder after bind mound always prod
      docker run -p 1000:1000 -v "{projectfullpath}:{containerworkspacefolder}" -v {workdir/node_modules} {imageName/imageId}   
      docker run -p 1000:1000 -v "/d/Backend Projects/hirekite:/app" -v /app/node_modules sha256:ba58cd5633d9c4179cbf3a0d933a6ad37ab26ec751d400c5c348838a9be5d2b0   
      a.bindMount using docker cli-> docker run -v "{POSIX-style-path of project folder}:{POSIX-style-path of container workspace folder}"
      docker run -v "/d/Backend Projects/hirekite:/app"     
   8.Docker Stage->Production Mode ,dev mode ->used
   As Name Production Mode dev mode using as name and command 
   FROM base as doc
   docker build .  --target doc     
