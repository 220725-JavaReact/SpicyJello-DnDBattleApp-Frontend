From nginx:alpine

copy /build /usr/share/nginx/html

copy nginx/nginx.conf /etc/nginx/conf.d

expose 80

cmd ["nginx", "-g", "daemon off;"]