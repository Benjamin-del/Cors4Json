# Cors4Json
When the API that you are using decides to throw a CORS header. 

# Example url
`https://enviroment.worker.subdomain.workers.dev/mode=hello-api/data1=1/data2=2/`

# Setup
Insert your Api Details in to the first Object

Ex:
``` 
const config = {
  base: "https://api.api.com/v9.4/",
  key: "1234567abcdef",
  id: "8765432",
  orgin: "https://me.com"
}
```

This and your API response should showup! With no Keys being shown to the user!

## Note:
The key is appended to the url as `apiKey` and the API ID is appended to the url as `appID`. If you need to change that it is on line 42 of `index.js`

In the URL `mode` is the part of the url after the base. This can be deleted if needed. 


# XML-WEATHER

While building my weather app I needed this for a XML response. I have included the file
