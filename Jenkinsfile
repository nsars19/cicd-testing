pipeline {
  agent any
  environment {
    TEST_ENV = "Top-level precedence"
  }
  stages {
    stage('Stage 1') {
      steps {
        echo 'Hello world.'
      }
    }
    stage('Stage 2') {
      environment {
        TEST_ENV = "Stage-level precedence"
      }
      steps {
        sh 'printenv'
      }
    }
  }
}