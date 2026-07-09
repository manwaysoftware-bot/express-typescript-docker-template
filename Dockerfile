#Project Docker Config
#Docker Login need->Before run
# Docker Desktop Definity before build image ->do you enable this open docker desktop app .and also in system tray that is running right side click icon click show the docker icon
#BASE IMAGE

#Project Docker Config
# Use Node 18 alpine
FROM node:18-alpine

# Copy package files and install production dependencies
COPY package.json package.json 
Copy package-lock.json package-lock.json 
#npm ci simplar npm install but npm ci use run using packeage-lock.json  is best for production state
# RUN npm install
RUN npm ci --only=production


# Copy the compiled output
COPY dist ./dist

# Expose port and run the compiled app (package.json contains "type": "module")
EXPOSE 3000
ENTRYPOINT ["node", "dist/app.js"]

# Usage:
# docker build -t hirekite .
# docker run -p 3000:3000 hirekite

#Image Config
# Label  is meta its only provide to addtional infromation .It is not affected anytime docker image build
LABEL authors="ragul"
LABEL version="1.0.0"
#It is also another metadata is not also not affected our proprgram
#It is only recoommend run this app which port number run
#docker run -p {portnumber}->Expose port numer keps recommeded
EXPOSE 3000
#docker build .->build the image
#docker image->get the list of images and check
#docker inspect{imageId/imagename}->give metadata of images
#docker run {imageId/imagename} -p {expose port numper(Port mapping)}(Devlopment State)->create container and run here docker run command can run container in the docker app.in browser its run definely -p {port numer requried you use expose port number reconmend}
#docker inspect {container name/container id} ->after run give as json formate meta data see bellow network setting ip adderss.using ip address can run app
# docker inspect ip->0.0.0.0 you can use localhost or local ip address can get that application
#docker login->Login into docker
#Recommded->docker build -t {imagename} .->build the image with name
#docker images->list out all images list with id if new image build without imagename you can see this

#docker hub repositery cannot create via terminial and docker software .only can create docker hub website
#docker tag {imagename with tag name/imageid} {dockerhupusername}/{oldimagename/newImageName}:->it is used for upload to specific dockername and also the current imageversion name
#docker push {respositeryname}-{tag}