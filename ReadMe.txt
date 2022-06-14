5 Best Practices

Versioning:
It is a good practice to add path segments like V1 or V2 into your URL. You should create a subfolder for each. This way you can work on improvements for a new version, while clients are still using the current version and are therefore not affected by changes. This also doesn't force clients to use the newer version right away. 

Name Resources in Plural:
Naming resources in plural lets other people know that it is a collection that consists of different items. Your API is being used by other humans so anything that can help be clear in understanding is going to make things run smoother. 

Group Associated Resources Together:
There might be cases where you have resources that are associated with others. It's a good practice to group them together in one endpoint and nest them properly.

Accept and Respond with Data in JSON Format:
When you interact with an API, you should always send data and recieve data in JSON format. JSON is a standardized format that is not tied to just one programing language, even though its roots are in JavaScript. It can be used with JavaScript and Python to name a few. 

Respond with Standard HTTP Error Codes:
Using standard HTTP error codes helps the customer or engineer using the API to identify the problem more easily. 