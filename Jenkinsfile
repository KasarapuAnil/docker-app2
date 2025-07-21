pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        // Clone your GitHub repo
        git 'https://github.com/KasarapuAnil/docker-app2.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("docker-app2") // name your image properly
        }
      }
    }

    stage('Run Docker Container') {
      steps {
        script {
          // Stop old container if running (optional)
          sh 'docker rm -f docker-app2-container || true'

          // Run new container
          sh 'docker run -d -p 8080:80 --name docker-app2-container docker-app2'
        }
      }
    }
  }
}
