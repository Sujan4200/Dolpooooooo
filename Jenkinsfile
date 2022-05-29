pipeline {
    agent { 
	docker {
	     image 'dolpo:1.0'
	     args '-p 3000:3000'
		}
	}

	environment {
		CI = 'true'

	}
	

    stages {
        stage ("Build") {
            steps{
		sh 'npm install'
                echo "Build succesfull"
            }
        }
        

        stage ("Deploy") {
             steps{
                echo "Deployed  succesfull"
            }
        
            
            
        }

        stage ("Test") {
             steps{
                echo "Test Successfull"
            }
            
        }

        stage ("Release") {
             steps{
                echo " Initial version released"
            }
            
        }
    }
}
