# home-cloud
The cloud at home

## Instalation

First of all you need to clone this repo and unzip the bootstrap theme

```bash
git clone https://github.com/espai422/home-cloud
cd home-cloud/client/src
tar -xzvf bootstrapTheme
```
## Set-Up
Once the bootstrap theme is extracted, you need to export 3 ENV VARS for the server and 1 for the client
Values ar only an exaple
Server
```bash
export HOST=192.168.1.75
export PORT=4222
export NODE_ENV=/home/Cloud
```
Client
```bash
export REACT_APP_API_URL=http://192.168.1.75:4222
```

Remember to export each var in diferent terminals, if it will not run
