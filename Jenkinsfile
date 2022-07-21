pipeline { 

    environment { 

        registry = "niklaus07/dolpoo" 

        registryCredential = 'dockerhub' 

        dockerImage = '' 

    }

    agent any

    stages { 

        stage('Cloning our Git') { 

            steps { 

                git 'git@github.com:Sujan4200/Dolpooooooo.git' 
            }

        } 

        stage('Building our image') { 

            steps { 

                script { 

                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 

                }

            } 

        }

        stage('Deploy our image') { 

            steps { 

                script { 

                    docker.withRegistry( '', registryCredential ) { 
                       dockerImage.push() 

                    }

                } 

            }

        } 

        stage('Cleaning up') { 

            steps { 

                sh "docker rmi $registry:$BUILD_NUMBER" 

            }

        } 

    }

}
