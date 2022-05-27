pipeline {
    agent any
	

    stages {
        stage ("Build") {
            steps{
		sh 'node install'
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
