pipeline {
  agent any
  stages {
    stage('Download') {
      steps {
        git(url: 'https://github.com/Divya4242/The-OS-Project.git', branch: 'main', poll: true)
      }
    }

  }
}