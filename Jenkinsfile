pipeline { 

    agent any
    tools {
        node 'Node'
    }
     stages{
        stage('Build React App') { 
            steps { 
                sh 'npm install'
                sh 'npm build ' 
            } 
        }
        stage('Build Docker Image') {
            steps{
                scripts{
                    sh 'docker build -t niklaus07/dolpooo . '
                }
            }
        }
         stage ('Push Docker image') {
            steps{
                script{
                    withCredentials([string(credentialsId: 'niklaus07', variable: 'dockerhub')]) {
                    sh 'docker login -u niklaus07 -p ${dockerhub}'
                }
                    sh 'docker push niklaus07/my-app-1.0'
                }
            }
        }
        
    }
    }
}

        
        
