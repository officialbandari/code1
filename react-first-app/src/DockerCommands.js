import React from 'react'

const DockerCommands = () => {
    return (
        <div>
            
            Docker 
	COMMANDS 	                               USE
1	sudo su 	                        Switch to Root user
2	docker pull ubuntu/centos/alpine	Get image from ubuntu/centos/alpine
3	docker run -it imageid	            Create containers we need one imageid
4	docker ps	                        How many running containers your server it will shows all 
5	docker start containerid	        It starts your stopped container
6	docker stop containerid	            It will stop the container 

7	Ctrl+pq	We will exit from the container but container is running 
8	exit	                            We  exit from the  container 
9	docker  ps -a	                    It shows all stopped containers and running containers
10	docker attache containerid        	Jump into this container
11	docker run -itd  imageid	        it will create a container but don’t go to inside of the container
12	docker run -it  --name  prasad imageid 	New Container create with prasad name
13	docker restart containerid	         restarts one or  more  containers
14	docker rm containerid	             Only Delete  one stopped container
15	docker ps -aq	                     It shows only containerids
16	docker rm containerid -f	         It delete only one running container
17	docker rm $(docker ps -aq) -f	     It deletes all running containers
18	docker images -q 	                 It shows all imageids only
19	docker rmi imageid	                 It delete only image
20	docker rmi $(docker images -q) 	     It deletes all images
21	docker rename containerid name	     the containerid takes giving name
22	docker rename oldname new name	     It change the container oldname to new name
23	docker start $(docker ps -aq)	     Starts all containers at a time 
24	Docker commit containerid imagename	 creats a new image of an edited container on the local system
25	dockerkill containerid	             Container by stopping its execution immediatly

        </div>
    )
}

export default DockerCommands
