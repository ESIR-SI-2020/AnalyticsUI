FROM nginx:1.17.1-alpine

COPY /dist/front-analytics /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
