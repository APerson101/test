
# Problem 

Researchers struggle to stay updated with emerging scientific advancements, facing challenges in navigating extensive literature across various fields. The current workflow involves querying databases, retrieving numerous papers, and assessing their relevance through titles, abstracts, and metadata. To synthesize information, researchers must read through diverse papers, consuming time and effort, often yielding irrelevant data. This inefficiency impedes leveraging the expansive and ever-growing scientific literature.

In summary, the key pain points for researchers include:
1.	Information Overload
2.	Time-Consuming Review
3.	Interdisciplinary Challenges
4.	Relevance Filtering
5.	Efficiency Gap

# Proposed Approach

To address the challenges, we developed SoftAI, an interactive web application that enables the following
1.	Paper Retrieval
2.	Paper Analysis
3.	Questioning & Answering (Q&A)
4.	Document Analysis
5.	Dataset Analysis
6.	Author Analysis
7.	Mindmap
8.	Keyword Extraction and Annotation
9.	Literature Review
10.	Topic Trend Analysis
11.	Relevant Searches
12.	Bookmark and Favorite List
    



![Architecture](https://github.com/connectaman/Palooza/blob/d9e5adc3a37111074c6c9576a6650572d68d8537/documentations/UML.png)



#### Comparing with Other Available Applications

![Comparing](https://github.com/connectaman/Palooza/blob/d9e5adc3a37111074c6c9576a6650572d68d8537/documentations/comparision.png)

# Future Enhancement:

In addition to the existing features, we plan to implement several advanced enhancements in current Palooza application:

-	Complex and Domain-Specific Retrieval
-	Advanced Mind Maps
-	Universal Retrieval Engine Support
-	UI Enhancement
-	Diverse Data Source Integration
-	Advanced Table Comparison View
-	Downloading Reports
-	Database Integration for User Login
These enhancements will make Palooza an even more powerful tool for researchers, providing a seamless and comprehensive research experience across diverse domains.



# Steps to Deploy:

- Dependencies
    - python>=3.11
    - nodejs
    - docker

## Backend FastAPI

- Step 1: Redirect to palooza-backend directory
```
cd palooza-backend/
```
- Step 2: Export env variables
```
export SERP_API_KEY=""
export GOOGLE_CSE_ID=""
export GOOGLE_API_KEY=""
```
- Step 3: build the docker image
```
docker build -t ai:latest .
```
- Step 3: run the docker image
```
docker run -d -p 8000:8000 ai:latest 
```


## FrontEnd UI

- Step 1: Redirect to palooza-frontend directory
```
cd palooza-frontend/
```
- Step 2: Install all the required packages
```
npm install
```
- Step 3: Change the Backend API url from the above steps
```
nana src/Config/config.js
```
- Step 3: Start the server
```
npm start
```

# Key points to note:
- You might be wondering why we use the SERP API. Well, we initially attempted web scraping using the **Beautiful Soup 4** library to download papers from Google Scholar. However, we encountered issues with Cloudfare and Captcha. Consequently, we transitioned to using the SERP API to download papers from Google Scholar.
- We retrieve the most recent papers (recently published) and perform analysis using GPT models. While using GPT models alone, we are unable to access the latest information as they are trained on data only up to September 2021.
