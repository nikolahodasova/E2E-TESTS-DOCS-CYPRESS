pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/nikolahodasova/E2E-TESTS-DOCS-CYPRESS'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t cypress-tests .'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'docker run cypress-tests'
      }
    }
  }
}