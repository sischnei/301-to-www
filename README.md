#301 to non-www
This is the Git repo of a 301-to-non-www Docker image meant to work in combination with Jason Wilder's [nginx-proxy](https://registry.hub.docker.com/u/jwilder/nginx-proxy/) Docker container to help setting up 301 redirects from your www to non-www-based domain URLs.

This is generally done to [normalize URLs](http://en.wikipedia.org/wiki/URL_normalization) for the SEO purposes.

##Usage

Run nginx-proxy
```
$ docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock jwilder/nginx-proxy
```
Then start proxied containers with `VIRTUAL_HOST` environment variable having non-www-based URL
```
$ docker run -e VIRTUAL_HOST=example.org  ...
...
$ docker run -e VIRTUAL_HOST=acme.com  ...
```
Run 301-to-www container specifying www-based host names that requre a 301 redirect
```
$ docker run -d -e VIRTUAL_HOST=www.example.org,www.acme.com alexeym/301-to-non-www
```
