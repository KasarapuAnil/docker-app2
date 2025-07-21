pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("docker-app2")
        }
      }
    }

    stage('Run Docker Container') {
      steps {
        script {
          sh 'docker rm -f docker-app2-container || true'
          sh 'docker run -d -p 8080:80 --name docker-app2-container docker-app2'
        }
      }
    }
  }
}
