#!/bin/bash

# Configuration
# Replace this with your Google Cloud Project ID or set it via environment variable
PROJECT_ID=""
APP_NAME="grease-guard-landing"
REGION="us-central1"

echo "🚀 Starting Deployment for $APP_NAME..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null
then
    echo "❌ gcloud CLI could not be found. Please install the Google Cloud SDK."
    exit 1
fi

# Authenticate if needed (simple check)
# gcloud auth login --brief

# Get Project ID
if [ -z "$PROJECT_ID" ]; then
    echo "🔍 No PROJECT_ID hardcoded in script."
    CURRENT_PROJECT=$(gcloud config get-value project 2>/dev/null)
    
    if [ -z "$CURRENT_PROJECT" ]; then
        echo "⚠️  No default Google Cloud project selected."
        read -p "👉 Please enter your Google Cloud Project ID: " INPUT_PROJECT_ID
        PROJECT_ID=$INPUT_PROJECT_ID
    else
        read -p "👉 Use current project ($CURRENT_PROJECT)? [y/N] " confirm
        if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
            PROJECT_ID=$CURRENT_PROJECT
        else
             read -p "👉 Please enter your Google Cloud Project ID: " INPUT_PROJECT_ID
             PROJECT_ID=$INPUT_PROJECT_ID
        fi
    fi
fi

if [ -z "$PROJECT_ID" ]; then
    echo "❌ Project ID is required."
    exit 1
fi

# Set project
echo "✅ Using Project: $PROJECT_ID"
gcloud config set project $PROJECT_ID

# Enable APIs
echo "🔄 Enabling necessary APIs (Cloud Build & Cloud Run)..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# Build
echo "🏗️  Building Container Image (this may take a few minutes)..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$APP_NAME

# Deploy
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $APP_NAME \
  --image gcr.io/$PROJECT_ID/$APP_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000

echo "✅ Deployment Complete!"
