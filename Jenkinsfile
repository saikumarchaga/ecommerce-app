pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm // Uses the repository configured in Jenkins
            }
        }
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run build || echo "No build step required for backend"'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
                dir('frontend') {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                sh 'echo "Deploying to staging..."'
                // Example: sh 'aws s3 sync frontend/build/ s3://staging-bucket'
            }
        }
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                sh 'echo "Deploying to production..."'
                // Example: sh 'aws s3 sync frontend/build/ s3://prod-bucket'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Build and tests passed!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
